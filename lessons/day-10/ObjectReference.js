let student1 = {
    name: "Anna",
    age: 20,
    bankAccount: {
        accountNum: 1234
    }
}

//shallow copy
// let student2 = {...student1};
// student2.bankAccount.accountNum = 9090;
// console.log(student1);
// console.log(student2);

let student3 = JSON.parse(JSON.stringify(student1));
student3.bankAccount.accountNum = 9090;
// console.log(student3);
// console.log(student1);

//Object command
console.log(Object.keys(student1)); //return array
console.log(Object.values(student1)); //return array
console.log(Object.entries(student1)); //return map