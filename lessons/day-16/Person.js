//Template - Data Model - OOP
class Person{

    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    //setter
    set name(name){
        this._name = name;
    }

    //getter
    get name(){
        return this._name;
    }
}

let teo = new Person("Teo", 18);
console.log(teo);

//Invoke setter
teo.name = "Ti";
console.log(teo);

//Invoke getter
console.log(teo.name);
