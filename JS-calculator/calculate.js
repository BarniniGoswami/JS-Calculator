let runningTotal=0;
//this buffer will represent the source of truth whatever is shown on the screen and will hold that to be used 
//later and we know whtever will be entered and shown as output must be in string thus initialised as"0"

let buffer="0";               //what should appear on calculator's screen
let previousOperator;        //stateful interface

const screen=document.querySelector('.screen');

function buttonClick(value)
{
//check whether the value is a number or not 
   if(!isNaN(value))
   {
       //this is a number
       handleNumber(value);
   }
   else{
       //not a number
       handleSymbol(value);
   }
   console.log("dekh");
   if(value==='=')
   screen.innerText=runningTotal;
   else
   screen.innerText=buffer;
}

function handleSymbol(symbol){
//  if(symbol==='C')
//  {
//      buffer='0';
//      runningTotal=0;
//  }
console.log("handle");
switch(symbol)
{
    case 'C':  buffer='0';
                runningTotal=0;
                break;
    case '←': if(buffer.length===1)
    {
        buffer='0';
    }
    else{
        buffer=buffer.substring(0,buffer.length-1);
    }
    break;
    case '+':handleMath(symbol);
    break;
    case '-': handleMath(symbol);
    break;
    case 'X':handleMath(symbol);
    break;
    case '/':handleMath(symbol);
    break;
    case '=':handleMath(symbol);
            //  screen.innerText=runningTotal;
              break;
    
}
}

function handleMath(symbol){
    console.log("Math",symbol);
   if(buffer==='0')
   {
       return;
   }
   const intBuffer=parseInt(buffer); //shorthand-+buffer

   if(runningTotal===0)
   {
       runningTotal=intBuffer;
       console.log("1st operand");
   }
   else{
       flushOperation(intBuffer);
    //    screen.innerText=runningTotal;
    //    alert(runningTotal);
      
   }

   previousOperator=symbol;
   buffer='0';

}

function flushOperation(intBuffer)
{
    console.log("flush");
    if(previousOperator==='+')
    {
        runningTotal+=intBuffer;
    }
    else if(previousOperator==='-')
    {
        runningTotal-=intBuffer;
    }
    else if(previousOperator==='X')
    {
        runningTotal*=intBuffer;
    }
    else if(previousOperator==='/') 
    {
        runningTotal/=intBuffer;
    }
    else{
        // screen.innerText=runningTotal;
    }
//   return;
}

function handleNumber(stringNumber){
    //when we are entering a single digit
    if(buffer === "0")
       buffer=stringNumber;
    
    //entering a more than single digit
    else
       buffer= buffer+stringNumber;

    // console.log("buffer",buffer);
   
}

function  init()
{
 document.querySelector('.calc-buttons')
 .addEventListener('click',function(event)
 {
    //  let text=event.innerText;
     buttonClick(event.target.innerText);
 })
}

 
init();

