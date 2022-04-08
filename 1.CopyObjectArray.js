console.log(typeof "yo");  //string
console.log(typeof typeof 10); // number -> string

const yo = "yo"; // "yo"
hey = "hey";
console.log(yo);  //string
console.log(hey, yo);

const nan = 1 * "string";
console.log(typeof nan); // number
console.log(Number.isNaN(nan)); //true

const infinity = 10/0; // error
console.log(typeof infinity); //number
console.log(Number.isFinite(infinity)); //false

console.log(typeof null); //object //задает только разраб когда не знает какое сейчас значение
console.log(typeof undefined) // undefined

console.log(typeof {}); //object
console.log(Array.isArray([])); //object
console.log(Array.isArray([])); //true
console.log(typeof (()=>{})); //function

// const ted = bob; // ячейка #345
// const alex = ted; //ячейка #345
// ted.name = "ted";
// console.log(bob.name); // "ted"

// const ted = {};  //создание нового объекта
// ted.name = bob.name;
// ted.age = bob.age;
// ted.isMarried = bob.isMarried;

//то же что и :

// const ted = {...bob}; //#456 -> поверхностная копия || clone объекта bob.
// Копирование объекта с другой ячейкой памяти но с теми же внутренностями, без копирования вложенных объектов.
// массив копируется так же
// console.log(ted === bob); //false
// console.log(ted.name === bob.name); //true
//
// const bob = {  // #345
//     name: "Bob",
//     age: 23,
//     isMarried: false,
//     friends: ["Alex", "Ted", "John"],
//     technologies: ["HTML", "JS/TS", "CSS/SASS"]
// }

// const donald = {...bob};
// donald.name = "Donald";
// console.log(donald === bob); //false
// console.log(donald);
// console.log(bob);
// console.log(bob.name === donald.name) //false
//
// bob.friends.push("Anna");
// console.log(bob); // и у боба и у дональда  в друзьях анна потому что свойство friends у боба к дональду скоприовалось как ссылка на объект
// console.log(donald); // и у боба и у дональда  в друзьях анна
const bob = {  // #345
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Ted", "John"],
    technologies: ["HTML", "JS/TS", "CSS/SASS"]
}

const donald = {...bob, friends: [...bob.friends], technologies: [...bob.technologies]}; //глубокое копирование с вложенными
// объектами если мы знаем структуру данных. Механизм копирования каждого объекта прописывается вручную
// для коприования с неизвестными данными берем библиотеку lodash с функцией cloneDeep
donald.name = "Donald";
bob.friends.push("Anna");
console.log(bob); //теперь у боба есть анна а у дональда нет
console.log(donald); //теперь у боба есть анна а у дональда нет


//По возможности
//Написать функцию копирования простого объекта с помощью for-in
//Написать рекурсивную функцию копирования сложного объекта с помощью for-in

//Обязательно
//https://www.youtube.com/watch?v=qMRhXenpz6Q&ab_channel=BoringFrontEnd



