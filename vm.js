/*
  Лобанов А.С. КНМО-102
*/


let fs = require('fs');
//Для работы readline-sync запустите npm install readline-sync в среде выполнения
let readFileSync=require('readline-sync');
const { exit } = require('process');
let memory=fs.readFileSync(process.argv[2],"utf-8").toLowerCase().split(/\s+/);
//for (let i=0;i<memory.length;i++) {console.log(i,memory[i]);}
//exit();
//console.log(memory);
//fix
//проверка ввода, свап -> move
let i=0;
let tmp=0;
while(memory[i]!=="bye")
{
    switch (memory[i])
        {
            case 'set':
                memory[memory[i+1]]=parseInt(memory[i+2]);
                i+=3;
                break;
            case 'input':
                let input=readFileSync.question('>');
                memory[memory[i+1]]=parseInt(input);
                //console.log(memory[memory[i+1]])
                i+=2;
                break;
            case 'is_int':
                memory[memory[i+2]]=1*(memory[memory[i+1]]==parseInt(memory[memory[i+1]]));
                i+=3;
                break;
            case 'is_pos':
                memory[memory[i+2]]=1*(memory[memory[i+1]]==Math.abs(memory[memory[i+1]]));
                i+=3;
                break;
            case 'sum':
                memory[memory[i+3]]=memory[memory[i+1]]+memory[memory[i+2]];
                i+=4;
                break;
            case 'raz':
                memory[memory[i+3]]=memory[memory[i+1]]-memory[memory[i+2]];
                i+=4;
                break;
            case 'mul':
                memory[memory[i+3]]=memory[memory[i+1]]*memory[memory[i+2]];
                i+=4;
                break;
            case 'del':
                memory[memory[i+3]]=memory[memory[i+1]]/memory[memory[i+2]];
                i+=4;
                break;
            case 'move':
                i=parseInt(memory[i+1]);
                break;
            case 'equals':
                memory[memory[i+3]]=1*(memory[memory[i+1]]==memory[memory[i+2]]);
                i+=4;
                break;
            case 'is_less':
                memory[memory[i+3]]=1*(memory[memory[i+1]]<memory[memory[i+2]]);
                i+=4;
                break; 
            case 'is_bigger':
                memory[memory[i+3]]=1*(memory[memory[i+1]]>memory[memory[i+2]]);
                i+=4;
                break;
            case 'move_if':
                i=(memory[memory[i+1]]) ? parseInt(memory[i+2]) : i+3;
                break;
            case 'move_if_not':
                i=(!memory[memory[i+1]]) ? parseInt(memory[i+2]) : i+3;
                break;
            case 'increase':
                memory[memory[i+1]]++;
                i+=2;
                break;
            /*case 'swap':
                memory[99]=memory[memory[i+1]];
                memory[memory[i+1]]=memory[memory[i+2]];
                memory[memory[i+2]]=memory[99];
                memory[99]=0;
                i+=3;
                break;
            */
           case 'change':
               memory[memory[i+1]]=memory[memory[i+2]];
               i+=3;
               break;
            case 'output':
                console.log(memory[memory[i+1]]);
                i+=2;
                break;
            case 'message':
                console.log(memory[i+1]);
                i+=2;
                break;
        } 
        //console.log(i);
       // if (isNaN(i)) {exit();}
}
