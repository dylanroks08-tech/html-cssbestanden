let valueOne = Math.floor(Math.random() * 50);
let valueTwo = Math.floor(Math.random() * 20);
let second = Math.floor(Math.random() *6000);

function calculator(){
  console.log(`${valueOne} + ${valueTwo} = ${valueOne + valueTwo}`);
} 
calculator();

function multipybyfive(){
  console.log(`${valueOne} * 5 = ${valueOne * 5}`);
}
multipybyfive()

function calculatminutes(){
  let sum = Math.trunc(second / 60)
  console.log(`${second}/60 = ${sum} `);
}
calculatminutes()