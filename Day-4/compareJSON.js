const obj1 = {
  name : 'Person1',
  age : 5
}
const obj2 = {
  age : 5,
  name : 'person1'
}
// _.isEqual(obj1, obj2);
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
console.log(obj1 === obj2);


