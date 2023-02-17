//Задание 1
const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

const parser = new DOMParser ();
const result = [];

const xmlDOM = parser.parseFromString (xmlString, "text/xml");
const students = xmlDOM.querySelectorAll ('student');

students.forEach (node => {
  let student = {
    name: `${node.querySelector ('first') .textContent} ${node.querySelector ('second') .textContent}`,
    age: node.querySelector ('age') .textContent,
    prof: node.querySelector ('prof') .textContent,
    lang: node.querySelector ('name') .getAttribute ('lang')
  }
  result.push (student);
});
console.log (result);


// Задание 2
let jsonString = `
{
  "list": [
	 {
	  "name": "Petr",
	  "age": "20",
	  "prof": "mechanic"
	 },
	 {
	  "name": "Vova",
	  "age": "60",
	  "prof": "pilot"
	 }
	]
  }`;

let data = JSON.parse(jsonString);
console.log(data);