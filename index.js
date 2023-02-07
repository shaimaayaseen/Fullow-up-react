class Car{
    constructor(model,make,min,max,year){
        this.make=make;
        this.model=model;
        this.cost=this.carCost(min,max);
        this.year=year;
    }
    getDescription(){
        return `A car ${this.model} from ${this.make} it's cost: ${this.cost} from ${this.year}`
    }
    carCost(min,max){
        return Math.floor(Math.random()* (max -min +1))+min;
    }

}
const car1= new Car("Tesla","tesla",50000,30000,2020);
console.log(car1.getDescription());



// -----------------------------------------------------

class person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    getGreeting(){
        return `Hi, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`;
    }
}
const person1= new person("Shaima'","alshlouh",25);


console.log(person1.getGreeting());


// Arrow functions
 counterFunc=(counter)=> {
    if (counter > 100) {
      counter = 0;
    }else {
      counter++;
    }

    return counter;
  }
  console.log(counterFunc(50));


//   const counterFunc=(counter)=>

// ---------------------------------------

nameAge=(name, age)=> {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
  }

  console.log(nameAge("shaima'","25"));

// ----------------------------------

 const createFullName=(firstName, lastName)=>{
    return firstName + " " + lastName;
  }

 const doubleNumber=(number)=> {
    return number * 2;
  }

   const getEvenNumbers=(array)=> {
    let evenNumbers = [];
    for (let i of array) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  }
  console.log((createFullName("shaima'","alshlouh")));
  console.log((doubleNumber(10)));
  console.log((getEvenNumbers([5])));

//   ----------------------------------
greeting=()=>{
if (1<2){ 
    for (let index = 0; index < 5; index++) 
    {
     console.log("hi");
     }
     } else{ 
    console.log("bye"); 
    }
}
console.log(greeting(1));
// ------------------------------------

// Array Method
let nums = [2, 4, 5];
const sum= nums.reduce((acc,cur)=> acc+cur**2,0)/nums.length
console.log(sum);
// ------------------------------------

let list=[1,2,3,4,5,6,7,8].map(x => x*10);
console.log(list);

// ------------------------------------

var canGo=([
  {  name: "Angelina Jolie",
     age: 80   },
 {   name: "Eric Jones",
     age: 2
 },
 {   name: "Paris Hilton",
     age: 5
 },
 {   name: "Kayne West",
     age: 16
 },
 {   name: "Bob Ziroll",
     age: 100
 }
]);  
var newcanGo= canGo.map(
  function makeString(canGo){
if(canGo.age>18){
return (canGo= canGo.name +"can go to The Matrix");}
else{
return (canGo= canGo.name +"you can't go to The Matrix");};
})
console.log(newcanGo);

// var persons = [
//   { name: { first: 'John', last: 'Hob' }, age: 35 },
//   { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
//   { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
//   { name: { first: 'Zues', last: 'Odin' }, age: 55 },
//   { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
// ];

// avgAge=(array)=>{
//   let Age=array.reduce((acc,cur)=>{
//     return acc + cur.age;
//   },0)
//   return Age/array.length;

// }
// console.log(avgAge(persons));



// // using filter task1
// let evenOnly= [1,8,6,4];
// const newEven = evenOnly.filter(y => y % 2 == 0);
// console.log(newEven);


// ------------------------------------
let arr=[1,8,6,4];
let newarr=arr.filter(x=>x %4 == 0);
console.log(newarr);