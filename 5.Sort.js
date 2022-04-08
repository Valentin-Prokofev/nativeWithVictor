const names = ["Bob", "Alex", "Fred", "Ted"]
console.log(names)
console.log([...names].sort())    //venbhetn
console.log(names)



const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
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
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];
console.log(students.sort((a,b)=>b.age - a.age))         //сравниваем по убыванию возраста
console.log(students.sort((a,b)=>a.name < b.name?-1:1))    //сравниваем имена по алфавиту
console.log(students.sort((a,b)=>a.name < b.name?-1:1))    //сравниваем имена по алфавиту

//bubble sort
//сортировка пузырьком

const nums = [-1, 2, 100, 200, 1000, 333, 7]

//по возрастанию пузырьком

for (let j = 0; j < nums.length - 1; j++) {         //оптимизированная
let isSort = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if(nums[i] > nums[i + 1]) {
            isSort = false;
            [nums[i+1], nums[i]] = [nums[i], nums[i+1]]
        }
    }
if(isSort) break
}

console.log(nums)

for (let j = 0; j < nums.length; j++) {         //пузырьковая в лоб
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i + 1]) {
            [nums[i+1], nums[i]] = [nums[i], nums[i+1]]
        }
    }
}

console.log(nums)