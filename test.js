/*typeof
let js=null;
if(js==null){
  console.log(typeof js);
}
*/

/*
// coding first chanllenge 1
// data1
const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;
// data 2
// const massMark=95;
// const heightMark=1.88;
// const massJohn=85;
// const heightJohn=1.75;

const markBmi=massMark/(heightMark**2);
const johnBmi=massJohn/(heightJohn**2);
// console.log(markBmi,johnBmi);

let markBmihigher=false;
if(markBmi>johnBmi){
  markBmihigher=true;
}
if(markBmihigher){
  //coding challenege 2
  console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}`);
}else{
  console.log(`John's BMI ${markBmi} is higher than Mark's! ${johnBmi}`);
  
}
*/
/*
// template litrals
const names="prateek";
const age=45;
const birthyear =2004;
const currentyear=2024
const job="student"
const litrals=`i'm ${names} and my age is ${currentyear-birthyear} year old and i'm ${job}!`;
console.log(litrals);
console.log(`hello world! \ni'm ${job} here`);
console.log(`string    multiple
lines`);
*/
/*
//conversion
let score=-32;
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
*/
// console.log(1+3+'3');
// falsy values there are 5 and else are truthy
// console.log(Boolean(null))
// console.log(Boolean("crore"))
//challenge 3
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
/*
let Dolphins1=97;
let Dolphins2=112;
let Dolphins3=101;
let Koalas1=109;
let Koalas2=95;
let Koalas3=123;
let team1average = (Dolphins1+Dolphins2+Dolphins3)/3;
let team2average=(Koalas1+Koalas2+Koalas3)/3;
console.log(team1average,team2average);
if(team1average===team2average && team1average>=100 && team2average>=100){
  console.log("draw!!");
  
}else if(team1average>team2average && team1average>=100 && team2average>=100){
  console.log(`dalphins winner ${team1average}`);

  
}else{
  if(team2average>=100){

  
  console.log(`kaolos winner ${team2average}`);
}else{
  console.log(`no one wins sorry!`);
  
}
}
*/
 //Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.

//condition?true:false;
let price=275;
(price>300)?console.log(`you bill is ${price+(20/100)*price}`):(price<=300 && price>=50)?console.log(`$you bill is ${price+(15/100)*price}`):console.log(`you bill is ${price} saste log marjao`);




