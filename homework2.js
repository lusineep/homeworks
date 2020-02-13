homework2.js

//1

function signDiffer (a, b, c) 
	{
  if ( (a < 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c > 0) || (a > 0 && b < 0 && c > 0) || (a > 0 && b > 0 && c < 0))
  		 {
            alert ("-");
 		 }else if ( a === 0 || b ===0 || c === 0){
            alert ("unsigned");
         } else {
            alert("+");
            	}
     }


//2 

let number = prompt("type a number");
let digit = prompt("type a digit");
let tmp = 0;
    for( j = 0; j < number.length ; j++ ){ 
            
            if(digit === number[j]){
            tmp += 1;
            }
        }
        if (tmp == 1){
        	alert("yes")
        }else{
        	alert("no")
        }
        
    

 //3  
 
let num = prompt("enter number");
let arr = [];
let newNum = "";
let lastNum = num[num.length-1];
let firstNum = num[0];
for(i = 1 ; i < num.length-1; i++){
       newNum +=  num[i];
        };
console.log(newNum);
let result  = `${lastNum}${newNum}${firstNum}`
if (num < 10 && num >= 0){
        alert(num);
}else{
alert(result);}


//4 

let a = +prompt();
let b  = +prompt();
let c  = +prompt();
    if(a > b && b > c ){console.log(${c}, ${b}, ${a})}
               else if(a > c && b < c ){console.log(${b}, ${c}, ${a})}
               else if(b > a && a > c){console.log(${c}, ${a}, ${b})}
               else if(b > c && c > a) {console.log(${a}, ${c}, ${b})}  
               else if(c > b && b > a){console.log(${a}, ${b}, ${c})}
               else if( c > a && b < a){ console.log(${b}, ${a}, ${c})}
               else {"use a valid digit"}


//5

let a = prompt("insert value of a");
let b = prompt("insert value of b");
let c = prompt("insert value of c");
const num1 = 2;
const num2 = 4;
let discriminant = Math.sqrt(Math.pow(b , 2) - num2*a*c);
console.log(discriminant);
let result1 = (-b + discriminant)/(num1*a);
console.log(result1);
let result2 = (-b - discriminant)/(num1*a);
console.log(result2);
if(+a === 0 ){
    alert("enter valid constant");
} else if((Math.pow(b , 2) - num2*a*c) === 0){
    alert(result1);
}else if((Math.pow(b , 2) - num2*a*c) < 0){
    alert("Solution does not exist");
}else{
    alert(`Solutions are ${result1} and ${result2}`);
}


//6

var n = +prompt();
var i = 0;
var j = 0;
if(n%2 === 0 && !Math.floor(n/10)){
    i+= 1;
};
if(n%3 === 0 && n%10 === 1){
    j+= 1;
};


//7

let figureName = prompt("figure name");
let height = +prompt("height");
let base = +prompt("base");
if(height !== 0 && base !== 0 && figureName === "triangle"){
    let square1 = (height * base)/2;
    alert(`Square of ${figureName} is ${square1}`);
} else if (height !== 0 && base !== 0 && figureName === "rectangle"){  let square2 = height * base 
    alert(`Square of ${figureName} is ${square2}`);
}else{alert("enter a valid value")}


//8

