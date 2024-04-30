// const array1=[];
// array1[0]="Yashi";
// array1[1]="verma";
// array1[2]=23;
// console.log(array1);
// document.getElementById("demo").innerHTML=array1;

//======================================================================

const fruits =["Mango","Guava","Chikoo","Banana","Strawberry"];
/*

let flen=fruits.length;

let text="<ul>";
for(let i=0;i<flen;i++){
    text +="<li>"+fruits[i]+"</li>";

}
text +="</ul>";
document.getElementById("demo").innerHTML=text;
*/
//=========================================================================

let x=fruits.push("Papaya");                      //last me add---push
console.log(fruits);
document.getElementById("demo").innerHTML=fruits;

//=============================================================================

let a=fruits.pop();
console.log(fruits);                           //last me se remove element

//=========================================================================
  let b=fruits.shift();
console.log(fruits);                           //first se remove element

//============================================================================

  let c=fruits.unshift("Jerry");
  console.log(fruits);                         //first me elemnt add

  //===========================================================

  let d=fruits.sort();                       //alphabetically
  console.log(fruits);

  //================================================================

  let z=fruits.toString();
  console.log(z);
//   console.log();
  document.getElementById("demo").innerHTML=z;

  //====================================================

  document.getElementById("demo").innerHTML=fruits.join("*");

  //==============================================================
  
let e=fruits.splice(1,0,"Orange");
console.log(fruits);

//==============================================================

let f=fruits.slice(2);             //original change nhi 
console.log(fruits);

//=================================================================

const veggies =["chilly" , "carrot ","cabbage" ,"mashroom"];

let r=fruits.concat(veggies);
console.log(r);


















