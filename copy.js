const fs = require("node:fs")

if(fs.existsSync("./files")){
    fs.cp("./files", "./files_copy", {recursive:true}, err =>{
        if(err) console.log(err);
        
    } )
}else{
    console.log(new Error("FS operation failed"));
}