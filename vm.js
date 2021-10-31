/*
  node-vm.js-code.txt-1/2
  1-fib-> n
  2-nod-> a,b  
*/

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


var readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});
function get()
{
    rl.prompt();
    rl.on('line', (input) => {
    input = input.toLowerCase();
    sleep(2000);
    rl.close();  
    return input;
    });
}

input
let fs = require('fs');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
let text=fs.readFileSync(process.argv[2],"utf-8").toString().split('\r\n');
//console.log(text);
let memory=[];
for (let j=0;j<1000;j++) {memory.push(0);}
let com=0;
let i=0;

if (process.argv[2]=="fib.txt")
{
    while(com<text.length)
    {
        switch (text[com])
        {
            case 'input':

                

        }
        com++;
    }
    console.log(memory);
    
}