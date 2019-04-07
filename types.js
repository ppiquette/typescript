var myString;
var myNum;
var myBool;
var myStrArray;
myString = 'Patate';
myNum = 4;
myBool = true;
function addMe(num1, num2) {
    return num1 + num2;
}
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    return User;
}());
var John = new User('John', 'uygyu', 45);
console.log(John);
