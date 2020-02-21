//1

function replace(string, wordsArray)
{
              let a = string.split(" ");
              let count = 0;
              if(Array.isArray(wordsArray))
              {
                  for(let i = 0; i < a.length; i++)
                  {
                     if(a[i] === "_")
                     {
                     a[i] = wordsArray[count];
                     count ++;
                     }                  
                  }
                        let result = a.join(" ");
                        return result;
              }else
              {
                        return "invalid input";
              }
}


//2
function getNumbers(allArray)
{
            let newArrayOdd = [];
            let newArrayEven = [];
            for(let i = 0; i < allArray.length; i++)
            {
                      if(typeof((allArray[i])) === "number" )
                      {
                            if(allArray[i]%2 === 0)
                            {
                               newArrayOdd.push(allArray[i]);
                             }else{
                            newArrayEven.push(allArray[i]);
                                  }
                       }
              }
              for(let i = 0; i < newArrayOdd.length; i++ )
              {
                        newArrayEven.push(newArrayOdd[i]);
              }
              // let result = newArrayEven.concat(newArrayOdd);
             //         return result;
                        return newArrayEven;
}

//3
function getNumbers(allArray){
            let newArrayOdd = [];
            let newArrayEven = [];
        if(Array.isArray(allArray))
        {
            for(let i = 0; i < allArray.length; i++)
            {
                      if(typeof((allArray[i])) === "number" || allArray[i] === 0 )
                      {
                            if(allArray[i]%2 === 0)
                            {
                               newArrayOdd.push(allArray[i]);
                            }else
                             {
                               newArrayEven.push(allArray[i]);
                             }
                       }
              }
              for(let i = 0; i < newArrayOdd.length; i++ )
              {
                        newArrayEven.push(newArrayOdd[i]);
              }
              // let result = newArrayEven.concat(newArrayOdd);
             //         return result;
                        return newArrayEven;
       }else{
             return "input array";
            }
}

//4
function maxlength(words)
{
                let min = 9;
                let max = 0;
                for(let i = 0; i < words.length; i++)
                {
                        if(words[i].length < min)
                        {
                           min = words[i].length;
                        }
                        if(words[i].length > max)
                        {
                           max = words[i].length;
                        }
                }
             let result  = max + min;  
             return result;      
}

//5
function sumOfNum(numbersArray)
{
            let result = 0;
            for(let i = 0; i < numbersArray.length; i++)
            {
//             debugger;
                    result += numbersArray[i];
             }
            return result;
}

//6

function productsOfNum(numbersArray)
{
            let result = [];
            for(let i = 0; i < numbersArray.length; i++)
            {
//             debugger;
                    if(numbersArray[i+1] || numbersArray[i+1] === 0)
                    {
                    let product = numbersArray[i] * numbersArray[i+1];
                    result.push(product);
                    }
            }
        return result;
}
