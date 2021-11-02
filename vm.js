/*
  node-vm.js-code.txt-1/2
  1-fib-> n
  2-nod-> a,b  
*/
//Первые 10 элементов под циклы, флаги, тмп и т.д
//0-2 i,j,k
//3-4 flags
//5-9 tmps
//10-19 под ввод

let fs = require('fs');
let readFileSync=require('readline-sync');
const { exit } = require('process');
let text=fs.readFileSync(process.argv[2],"utf-8").toString().split('\r\n');
console.log(text);
let memory=[];
for (let j=0;j<30;j++) {memory.push(0);}
let com=0;
let i=0;

if (process.argv[2]=="fib.txt")
{
    memory[20]=0;
    memory[21]=1;
    while(com<text.length)
    {
        switch (text[com])
        {
            case 'input':
                let input=readFileSync.question('>');
                memory[i+10]=parseInt(input);
                i++;
                break;
            case 'repeat':
                memory[0]=0; //цикл начинается с 1
                memory[3]=1; //флаг на цикл
                break;
            case '{':
                memory[6]=com; //тмп забивается под номер строки
                break;
            case '}':
                memory[0]++;
                memory[4]=(memory[0]<=memory[10]) ? 1 : 0; //флаг на конец цикла
                com=(memory[4]==1) ? memory[6] : com;
                break;
            case 'sum':
                memory[22+memory[0]]=memory[20+memory[0]]+memory[21+memory[0]];
                break;
            case 'output':
                console.log(memory[20+memory[10]]);
                break;
        }
        com++;
        
    }
    
    
}
if (process.argv[2]=='nod.txt')
{
    memory[0]=0;
    while(com<text.length)
    {
        switch (text[com])
        {
            case 'input':
                let input=readFileSync.question('>');
                memory[i+10]=parseInt(input);
                i++;
                break;
            case 'while':
                memory[4]=0; //флаг на условие, while кончается, когда 1
                break;
            case '{':
                memory[6]=com;
                break;
            case '}':
                memory[4]=(memory[10]==memory[11]) ? 0 : 1;
                com=(memory[4]==1) ? memory[6] : com;
                break;
            case 'compare':
                memory[3]=(memory[10]>memory[11]) ? 1 : 0;
                break;
            case 'swap':
                memory[5]=memory[10]; //tmp под одно из чисел
                memory[10]=memory[10]-(memory[10]-memory[11])*memory[3];
                memory[11]=memory[11]-(memory[11]-memory[5])*memory[3];
                memory[5]=0;
                break;
            case 'lowermax':
                memory[4]=(memory[10]==memory[11]) ? 0 : 1;
                memory[11]=memory[11]-memory[10]*memory[4];
            case 'output':
                console.log(memory[10]);
                break;
        }
     com++;
     console.log(memory);
    }   
}