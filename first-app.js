// console.log('Hello World');
// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'Hello from node js');

// let a=9;
// const b=8;

// const prod=(x, y)=> x*y;
// console.log(prod(a, b));

// const student = {
//     name: 'Alex',
//     age: 18,
//     dept: 'Communications',
//     intro(){
//         console.log(`Hi, I am ${this.name} of age ${this.age}, studing in ${this.dept} department`);
//     }
// }

// student.intro();

// const fruits = ['apple', 'oranges' , '', 'mango', '' , 'lemon'];
// const newFruits = fruits.map(fruit=>{
//     if(fruit===''){
//         return 'empty string';
//     }
//     else{
//         return fruit;
//     }
// })
// console.log(newFruits);

// let [arr1, arr2] = fruits;
// [fruits[0], fruits[1]]=[fruits[1], fruits[0]];
// console.log(fruits);


const printA = new Promise((resolve, reject)=>{
    resolve('a');
});
const printB = new Promise((resolve, reject)=>{
    resolve('b');
});
const printC = new Promise((resolve, reject)=>{
    resolve('c');
});
const printD = new Promise((resolve, reject)=>{
    resolve('d');
});
const printE = new Promise((resolve, reject)=>{
    resolve('e');
});
printA.then(msg=>{
    console.log(msg);
    printB.then(msg=>{
        console.log(msg);
        printC.then(msg=>{
            console.log(msg);
            printD.then(msg=>{
                console.log(msg);
                printE.then(msg=>{
                    console.log(msg);
                })
            })
        })
    })
})

async function seq(){
    let A = await printA;
    console.log(A);
    let B = await printB;
    console.log(B);
}
seq();