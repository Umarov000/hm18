const fs = require("node:fs")


if(fs.existsSync("./files")){
    fs.readdir("./files", (err,files)=>{
        if(err) console.log(err);
        else{
            console.log(files);
        }
    })
}else{
    console.log(new Error("FS operation failed"));
}