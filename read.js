const fs = require("node:fs")

if(fs.existsSync("./fileToRead.txt")){
    fs.readFile("./fileToRead.txt", "utf-8", (err, data)=>{
        if(err) console.log(err);
        else console.log(data);
    });
}else{
    console.log(new Error("FS operation failed"));
}