var Teacher = require('./objects/Teacher');
var Student = require('./objects/Student');
var Driver = require('./objects/Driver');
var { writeObjectToFile, readObjectFromFile } = require('./objects/fileHandler');

var teacher = new Teacher('Андрей Ротарь', 30, 'История');
var student = new Student('Мария Степанова', 24, '4 курс');
var driver = new Driver('Сергей Кузнецов', 25, 'Audi');

var filePath = './teacher.json';

writeObjectToFile(filePath, teacher);

writeObjectToFile(filePath, student, true);
writeObjectToFile(filePath, driver, true);

var readData = readObjectFromFile(filePath);
console.log(JSON.stringify(readData, null, 2));
