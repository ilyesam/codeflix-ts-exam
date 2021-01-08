const fs = require('fs-extra');
const path = require ('path');
 
var file='';
function mycopy(){
   if(path.extname(process.argv[2])==='.txt' && path.extname(process.argv[3])==='.txt'){
    file= fs.copySync(process.argv[2], process.argv[3]);
    console.log(file);
    console.log('***Fichier  copié!*** '); 
 
   }     else { 
     file = fs.copySync(process.argv[2], process.argv[3]);
     console.log(file);
     console.log('***Dossier copié!*** ');
   }   
 }  
 mycopy();
