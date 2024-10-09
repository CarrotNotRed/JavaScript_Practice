//Function Expression -> Arrow function
const sum2Nums = (a, b) => (a + b);

//Get the even nums
const arr = [1, 2, 3, 4, 5];
const evenNums = arr.filter(num => num % 2 === 0);
console.log(evenNums);

//Lexical 'this' binding
const personWithNormalFunc = {
    name: 'Teo',
    sayHello: function(){
        setTimeout(function(){
            console.log(`Hello, my name is ${this.name}`);
        }, 2000);
    }
}
personWithNormalFunc.sayHello(); //output: Hello, my name is undefined

const personWithArrowFunc = {
    name: 'Teo',
    sayHello: function(){
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 2000);
    }
}
personWithArrowFunc.sayHello(); //output: Hello, my name is Teo


