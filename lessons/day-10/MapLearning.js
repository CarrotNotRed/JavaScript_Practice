//CRUD
const emergencyList = new Map([
    ['113', 'Police Dept'],
    ['114', 'Fire Dept'],
    ['115', 'Hospital Dept'],
    ['116', 'Others Dept'],
]);

//Read a single value from entry
console.log(emergencyList.get('113'));

//Check if a key is existing
console.log(emergencyList.has('112'));

console.log('------Loop the map entries via keys-----');
for(const key of emergencyList.keys()){
    console.log(`${key}: ${emergencyList.get(key)}`);
}

console.log('------Loop the map entries via values-----');
for(const value of emergencyList.values()){
    console.log(`Value: ${value}`);
}

//Creates an array from an iterable object.
console.log(Array.from(emergencyList.keys())); //output: ['113','114','115','116']

//Update: set
console.log(emergencyList.set('117', 'Police Dept'));
console.log(emergencyList.set('116', 'SomethingElse'));

//Delete
console.log(emergencyList.delete('116'));
console.log(emergencyList);







