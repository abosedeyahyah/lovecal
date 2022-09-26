//enter your love calculation
/**prompt("enter first name")
prompt("enter the other name")
alert(Math.round(Math.random() * 100)+1  +"% love");**/


/**var firstname = prompt("what is your name")
var secondname = prompt("what is the other name")
let lovescore =(Math.round(Math.random() * 100) + 1);

if (lovescore > 70) {
  alert("your lovescore is "  +  lovescore  + "%. your love is excellet");
}else if (lovescore < 70 && lovescore > 50) {
  alert("your lovescore is " + lovescore + "% your love is average");
}
 else {
 alert("your lovescore is " + lovescore + "%. your love poor"); 
}**/


const year = prompt('Enter a year:');
checkLeapYear(year);

function checkLeapYear(year) {
 const leap = new Date(year, 1, 29).getDate() === 29;
 if (leap) {
 alert(year + ' is a leap year');
} else {
 alert(year + ' is not a leap year');
 }

}
 
 
  
 

  
 


