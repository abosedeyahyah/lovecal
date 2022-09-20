
// To calculate age:
/**var year_born = prompt("Please enter your date of birth:", "Type here");
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
var currentDate = new Date();
 var currentYear = currentDate.getFullYear();
 age = currentYear - birthYear;
 return age;
}
calculatedAge = getAge(year_born);
alert("Hello, " + "you are " +  calculatedAge + "  years old!");**/

/**var today = new Date();
var dateofevent = new Date(today.getFullYear(), 10, 9);
if (today.getMonth() == 10 && today.getDate() > 9) {
  dateofevent.setFullYear(dateofevent.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((dateofevent.getTime() - today.getTime()) / one_day) +
    "days left until eventday!"
)**/

/**var weight = prompt("enter  the base of your rectangle.")
var height = prompt("enter the height of your rectangle")
function area(weight,height) {
  return weight * height;
}
document.write('The area of your rectangle is ' + area(weight, height));


let base = prompt("enter  the base of your triangle.")
let height = prompt("enter the height of your triangle")
function area(base,height) {
  return base * height;
}
alert('The area of your triangle is ' + area(base, height)/2 );

/**var height = prompt("enter a number for bmi height")
var weight = prompt("enter a number for the weight of the bmi")

var bmi = weight / (height*2)
alert("result is: "  + bmi)**/

prompt("enter first name")
prompt("enter the other name")
alert(Math.round(Math.random() * 100)+1  +"% love");

 /**loveCalculator("tayo","tolu");
 function loveCalculator(tayo,tolu)
 {
alert("The lovers "+tayo+" and "+tolu+" has "+(Math.floor(Math.random() * 100)+1)+" % love");
 }**/
 

 
 
  
 

  
 


