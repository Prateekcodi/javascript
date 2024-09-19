'use strict';
//function
// function processor(apple,orange){
//   apple++;
//   console.log(apple,orange);
//   return apple+orange;
  
// }

// const juice=processor(4,1);
// console.log(juice);

//function expression
/*const age = function(){
  return 20-3;
}
const ageans=age();
console.log(ageans);
*/


//arrow function
/*
const calcage3=birthday=> 2024-birthday;
const age3=calcage3(2004);
console.log(age3);
*/
// arrow function
// const calcage3=birthday=>{
//   return 2024-birthday;
// }
// console.log(calcage3(2004));

/*
function checkfunction(a1,a2){
  if(a1>=(a2*2)){
    console.log(`dophines wins ${a1} and ${a2} `);
    
  }else if(a2>=(a1*2)){
    console.log(`koalas wins ${a2} and ${a1} `);
    
  }else{
    console.log("draw match !!");
    
  }
}

function Dolphinsfunction(Dolphins1,Dolphins2,Dolphins3){
  const calcAverage=(Dolphins1+Dolphins2+Dolphins3)/3;
  return calcAverage;

}
// datatype variable=parameter=>{
//function there
//}
const averagedolphines=kuchor=>{
  let Dolphins1=97;
  let Dolphins2=112;
  let Dolphins3=101;
  const dolpavg=Dolphinsfunction(Dolphins1,Dolphins2,Dolphins3);
  let Koalas1=109;
  let Koalas2=95;
  let Koalas3=123;
  const koalavg=Dolphinsfunction(Koalas1,Koalas2,Koalas3);
  checkfunction(dolpavg,koalavg);
  console.log(kuchor);
  

}
averagedolphines(23);
*/
/*
const first=['chomu','gobhilelo','panipuri']
const array=['hello',95,first];
console.log(array.length);
const length=array.push("hello");
console.log(length);
console.log(array);
const newarray=array.pop();
console.log(newarray);
console.log(array.includes("bobs"));
console.log(array.length);
array.unshift("gobi");
console.log(array);
array.shift()
console.log(array);

*/

//challege 2

// const totalbill=bill=>{
//   if(bill>300){
//     const tip=(20/100)*bill;
//     console.log(`total bill is ${tip+bill}`);
    
    
//   }else if(bill<=300 && bill>=50){
//     const tip=(15/100)*bill;
//     console.log(`total bill is ${tip+bill}`);
    
//   }else{
    
//     console.log(`gareeb insaan marjao ${bill}`);
//   }
// }

// const bill=[125,555,44];
// totalbill(bill[0]);
// totalbill(bill[1]);
// totalbill(bill[2]);
//challange 2
/*
const totalbill=bills=>{
  return (bills>=50 && bills<=300)?((bills*0.15)+bills):((bills*0.20)+bills);
}
const array=[125,555,44];
const total=[totalbill(array[0]),totalbill(array[1]),totalbill(array[2])];
console.log(total);
*/
/*
const jonas={
  firstname: "prateek",
  lastname: "pal",
  age: 20,
  location: "kanpur",
  friends: function(){
    // return 40-age;
    this.log=40-this.age

    return this.log;
  }
};
// console.log(jonas.location);
// jonas.place="lucknow";
// jonas["number"]=23234332;
// const friend=jonas.friends;
// // console.log(jonas);
// console.log(`${jonas["firstname"]} has ${jonas["friends"].length} friends , his best friend is called ${jonas.friends[1]}`)
// console.log(jonas["friends"](20));
jonas.friends();
console.log(jonas)
*/

const jonas={
  birthday: 1991,
  calcage: function(){
    // console.log(this);
    // return 2037-this.birthday;
    this.age=2037-this.birthday;
    return this.age;
  }
};
console.log(jonas.calcage());