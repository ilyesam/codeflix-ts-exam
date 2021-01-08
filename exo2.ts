const readline = require('readline');
const fs = require('fs');
const path = require('path');
import {readFileSync} from 'fs'

let text;

function mycat(){

    if(process.argv[3] === '-e'){
         text = readFileSync(path.resolve(process.argv[2]),'utf8');
        console.log(text +'$');
    }
    else if (process.argv[2]){
   
        text = readFileSync(path.resolve(process.argv[2]));
       console.log(text.toString());

    }
    else {
        console.log('Hello word');
    }

}


mycat();
