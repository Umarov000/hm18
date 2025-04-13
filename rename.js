const fs = require("node:fs")

if(fs.existsSync("./wrongFilename.txt")){
    if(!fs.existsSync("properFilename.md")){
        fs.rename("./wrongFilename.txt", "./properFilename.md", err=>{
            if (err) console.log(err);
        });
    }else{
        console.log(new Error("FS operation failed2"));
    }
    
}else{
    console.log(new Error("FS operation failed1"));
}