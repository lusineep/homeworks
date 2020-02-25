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
