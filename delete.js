const fs = require("node:fs")

if(fs.existsSync("./fileToRemove.txt")){
    fs.rm("./fileToRemove.txt", err=>console.log(err));
}else{
    console.log(new Error("FS operation failed"));
}