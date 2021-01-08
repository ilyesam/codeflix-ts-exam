import fs from 'fs'
import path from 'path'


 function myls() {

  if (process.argv[2] == null){
 var chemin = path.basename (process.cwd ());
 console.log(chemin);
 var dir=fs.readdirSync(path.dirname(chemin),'utf-8');
  }
  else {
    var chemin = path.basename (process.argv[2]);
    console.log(chemin);
    var dir=fs.readdirSync(chemin,'utf-8');
  }
 console.log(dir);
 
}
myls();
