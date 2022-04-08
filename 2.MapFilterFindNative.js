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
/////////////////////////////////////////////////////////////////////////////MAP

// создание нового массива с целью вывода первого значения ключа у каждого элемента массива на чистом жс!
const names = [];
//перебираем исходный массив:
for (let i = 0; i < students.length; i++) {
    //выполняем преобразоание элемента исходного массива:
    const result = students[i].name
    //рпезультат преобразования помещаем в новый массив:
    names[i] = result
}
console.log(names)

// создание нового массива с целью преобразования каждого элемента массива на чистом жс!
const trueStudents = [];
//перебираем исходный массив:
for (let i = 0; i < students.length; i++) {
    //выполняем преобразоание элемента исходного массива:
    //1 способ
    const result = {...students[i], isStudents: true}
    //2способ//
    // //const result = {
    //     name: students[i].name,
    //     age: students[i].age,
    //     isMarried: students[i].isMarried,
    //     scores: students[i].scores,
    //     isStudent: true
    // }

    //результат преобразования помещаем в новый массив:
    trueStudents[i] = result
}
console.log(trueStudents)

/////////////////////////////////////////////////////////////////////////////MAP

//что под капотом у map:
const myMap = (array, callback) => {
    const newArray = []
    for (let i = 0; i < students.length; i++) {
        const result = callback(array[i]);
        newArray[i] = result
    }
    return newArray
}

console.log(myMap(students, s => s.name)) // тоже что и со строки 29
console.log(myMap(students, s => ({...s, isStudents: true}))) //тоже что и со строки 40
console.log(students.map(s => s.name))

/////////////////////////////////////////////////////////////////////////////FILTER
const myFilter = (array, callback) => {
    const newArray = []
    for (let i = 0; i < students.length; i++) {
        if (callback(array[i]) === true) {
            newArray.push(array[i])
        }
    }
    return newArray
}

const filterFunction = s => s.age >= 20

console.log(myFilter(students, filterFunction))
console.log(students.filter(filterFunction))

/////////////////////////////////////////////////////////////////////////////FIND


const myFind = (array, callback) => {
    for (let i = 0; i < students.length; i++) {
        if (callback(array[i]) === true) {
            return array[i]
        }
    }
}

console.log(students.find(s => s.name === "Alex"))
console.log(myFind(students, s => s.name === "Alex"))

//ДЗ: самостоятельно расписать метод includes.


