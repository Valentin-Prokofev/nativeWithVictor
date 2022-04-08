const toDoListID_1 = "34hf"  // = v1() -> ?????
const toDoListID_2 = "209ax"  // = v1() -> ?????

const toDoList = [
    {
        id: toDoListID_1,
        title: "what to learn",
        filter: "all"
    },
    {
        id: toDoListID_2,
        title: "what to buy",
        filter: "all"
    }
]

// Ассоциативный массив это абстрактный тип данных который позволяет совершать операции с парами  ключ:значение(CRUD)
//Все тот же просто объект ключи значений у которого не предопределены а формируются по объявлению этого объекта
const tasks = {
    [toDoListID_1]: [                       // Способ создания свойств объекта с помощью квадратных скобок. В скобках можно писать разные выражения для хранения ключей
        {id: 1, name: "HTML", isDone: true},
        {id: 2, name: "CSS", isDone: true},
        {id: 3, name: "React", isDone: false}
    ],
    [toDoListID_2]: [
        {id: 4, name: "Sugar", isDone: true},
        {id: 5, name: "Salt", isDone: true},
    ]
}


//Базовый синтаксис при общении с объектами это через [], чреез . это синтаксический сахар.

console.log(tasks[toDoListID_1][1]["name"]) // CSS
console.log(tasks[toDoListID_1].find(t => t.id === 1))  // {id: 1, name: "HTML", isDone: true}
console.log(tasks[toDoListID_1].filter(t => t.isDone === true))  // {id: 1, name: "HTML", isDone: true}, {id: 2, name: "CSS", isDone: true}
console.log(tasks[toDoListID_1].map(t => t.name))  // ['HTML', 'CSS', 'React']

let names = []              // логика ниже запихнет в этот массив все значения свойств name из объекта tasks
for (const key in tasks) {
    names = names.concat(tasks[key].map(t => t.name))
}
console.log(names)   //['HTML', 'CSS', 'React', 'Sugar', 'Salt']

/////////////////////////////////////////////////////////////////////////REDUCE
//Метод редюс это функция встроенная в жс, которая в качестве параметра принимает:
//1.Колбэк которая в качестве параметров принимает первым аккумулятор, вторым очередной элемент массива.
// Особенностью этого аккумулятора является то что ретурн этой функции колбек на предыдущей итерации становится значением
// аккумулятора в последующей итерации.
//2.Вторым параметром редюса принимается стартовое значение аккумулятора, который сейчас находится в колбеке иравняется 0.

//Если в параметрах редюса не предавать стратовое значение аккумултору то он принимает значение первого элемента массива.
//Кжадая итерация колбек функции редюса должна иметь ретурн, и то что это функция ретюрнит на следующей итерации превращается в аккумклятор

//reduce: [] -> unit  редюс сокращает массив до одной еденичной сущности(может быть примитивом)
// или одного значения или новую структуру данных,
//
const numbers = [1, 3, 5, 7]
console.log(numbers.reduce((acc, el) => {
    return acc + el  //15+ 7 = 22  сложение всех чисел последовательно
}, 0))

console.log(numbers.reduce((acc, el) => acc > el ? acc : el)) //нахождение болбшего числа

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
console.log(students.reduce((acc, el) => { //{Bob: 85, Alex: 89, Nick: 120, John: 100}
    acc[el.name] = el.scores
    return acc
}, {}))

console.log(students.reduce((acc, el) => {
    acc.push(el.name)
    return acc             //['Bob', 'Alex', 'Nick', 'John']
}, []))

console.log(students.reduce((acc, el) => {
    acc.push({...el})
    return acc             // создаем глубокую копию массива students
}, []))                      // то есть мы создаем новый массив, потом на каждом шаге делаем копию объекта student и кладем ее в новый массив

console.log(students.reduce((acc, el) => {
    acc.push(el)
    return acc             // создаем поверхностную копию массива students()
}, []))

// трансформация структуры данных с помощбю редюс:
//"Bob":{     age: 22,
// //         isMarried: true,
// //         scores: 85
//       }

console.log(students.reduce((acc, el) => {
    acc[el.name] = {...el}
    delete acc[el.name].name
    return acc
}, []))

//Чаще всего редюс используется для преобразования массивов с данными. Например для получения из тяжелого массива
//какого нибуль легкого объекта и потом уже с ним работпть, а не каждый раз маслать этот тяжелый объект.
// конечно же иммутабельно. сторка 88.