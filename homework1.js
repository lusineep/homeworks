
// 1

var number1 = prompt ("1st number");
var number2 = prompt("2nd number");
	if(isNaN(Number(number1)) || isNaN(+number2) || number1 === null || number2 === null )
	{
	   alert("invalid inputs")
	} 
	else {
		if (number1 % number2 === 0 || number2 % number1 === 0) 
		{
  		 alert("0");
		} else {
		alert("1");
		}
		}
// 2 

var angle1 = prompt("1st angle");
var angle2 = prompt("2nd angle");
var angle3 = 180 -  angle1 - angle2;
	alert (angle3);

//3 

var a = prompt("type number");
var b =  a + a;
var c =  b + a;
var result = Number(a) + Number(b) + Number(c);
	alert(result);

// 4 

var num = prompt("type number");
	if(num%10 === 0 || (num < 10 && num  > 0) ){
		alert (num);
	}  else {
		var firstNum = num % 10;
		var lastNum = (num - num % 10) / 10;
		var result = String(firstNum) + String(lastNum);
		alert (result);
}

 //5

var num1 = prompt("number1");
var num2 = prompt("number2");
var num3 = prompt("number3");
var num4 = prompt("number4");
var num5 = prompt("number5");
var result1 = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);
var result2 = result1/5;
	alert(result2)





