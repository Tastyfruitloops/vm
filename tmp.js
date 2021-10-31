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
    sleep(5000);
    rl.close();  
    
    });
    return input;
}
let a=get();
console.log(a);
console.log('a');