
let myString: string;
let myNum: number;
let myBool: boolean;

let myStrArray: string[];

myString = 'Patate'
myNum = 4
myBool = true

function addMe(num1, num2?){
    return num1 + num2
}

class User {
    name: string;
    email: string;
    age: number;

    constructor (name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
let John = new User('John', 'uygyu', 45)
console.log(John);