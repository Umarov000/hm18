const fs = require("node:fs")


if(!fs.existsSync("./files/fresh.txt")){

    fs.writeFile("./files/fresh.txt", "I am fresh and young", (err) => {
        if (err) console.log(err);
        else console.log("file successfuly created");
    });
}else{
    console.log( new Error("FS operation failed"));
}
        
    