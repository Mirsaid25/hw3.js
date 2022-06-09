let arr = [4, 16, 19, 22, 11, 144, 967, 19124]

let even = []
let odd = []

even = arr.filter(item => item % 2 === 0);
odd = arr.filter(item => item % 2 === 1);
console.log(even)
console.log(odd)

// Задание 2

// Отфильтровать массив машин закинуть в переменную cheap только те машины у которых цена меньше 7 тысяч


let cheap = []
let arr2 = [
    {
        model: "malibu",
        color: "white", 
        cost: 24000, 
    },
    {
        model: "Vaz 2107",
        color: "black", 
        cost: 55000, 
    },
    {
        model: "Lacetti",
        color: "white",
        cost: 13000
    },
    {
        model: "Rolls Roys",
        color: "Red",
        cost: 23000
    },
    {
        model: "Lamborgini",
        color: "blue",
        cost: 30000 
    },
    {
        model: "cobalt",
        color: "black", 
        cost: 1000, 
    },
    {
        model: "nexia",
        color: "red", 
        cost: 6000, 
    },
    {
        model: "taxo",
        color: "darkblue",
        cost: 85000,
    },
    {
        model: "captiva",
        color: "white",
        cost: 25000,
    },
    {
        model: "trailblazer",
        color: "black",
        cost: 70000,
    },
    {
        model: "Toyota supra",
        color: "orange",
        cost: 50000
     },
     {
        model: "Dodge",
        color: "blueviolet",
        cost: 30000
     },
     {
        model: "Porsche taycan",
        color: "white",
        cost: 15000
     },
     {
        model: "tesla",
        color: "grey",
        cost: 5000
     },
     {
        model: "R34 GTR",
        color: "blue",
        cost: 7000
     },
     { 
       model: 'БМВ M4 competition',
       color: 'black',
       cost: 40000
     },
]

let c = arr2.filter(item => item.cost < 7000)
cheap = c
console.log(cheap)