//1
function fibonacci (max){
          let res = '0 , 1 , ';  
          let num = 0;
          let first = 0;
          let second = 1;
          
        while((num + second) < max){
// debugger;
            num = first + second;
            res += `${num} , `;
            first = second;   
            second = num;   
       }
        return res;
}

//2
function reminderOrQuotient(number){
        let numberstring = "" + number;
        let length = numberstring.length;
        let sum = 0;
        let prod = 1;
        let result;
        for(let i = 0; i < length; i ++){
// debugger;
            let digit = number%10;
            let expr = (number - (number%10))/10
            number = expr;
            sum += digit;
            prod *= digit;
        }
            if(prod%sum === 0 && prod/sum !==0){
                result = prod/sum;
                return `Quotient is ${result}`
            }else if(prod === 0){
                return `Can not calculate`;
                }else{
                result = prod%sum;
                return `Reminder is ${result}`
                }
}

//3





//6

let n = 5;
let res = '';
let count = n-1;
for(let i = 1; i < n*2; i++){
        let row  = '';
           for(let j = 1; j <= i; j++){
// debugger;
               if(i > n && j <= count){
                row += j;                      
                }else if (i <= n){ row += j;}               
        }
        if(i>n){count--;}
        res += row;
        res += '\n';
        }
console.log(res);

//7

let n = 5;
let res = '';
for(i = 1; i <=5; i++){
      let row = '';
      for(j = 1; j <= 5; j++){
            row += '* ';
    }
    res += row;
    res += '\n';
}
console.log(res);

//8

let n = 5;
let res = '';
for(i = 1; i <=5; i++){
      let row = '';
      for(j = 1; j <= n; j++){
           if((i ===1||i === n) || (j === 1 || j===n)){
            row += '* ';}
            else{
                row += "  ";
            }
      }
    res += row;
    res += '\n';
}
console.log(res);
