// console.log('Hello World');
// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'Hello from node js');

// let a=9;
// const b=8;

// const prod=(x, y)=> x*y;
// console.log(prod(a, b));

const student = {
    name: 'Alex',
    age: 18,
    dept: 'Communications',
    intro(){
        console.log(`Hi, I am ${this.name} of age ${this.age}, studing in ${this.dept} department`);
    }
}

student.intro();