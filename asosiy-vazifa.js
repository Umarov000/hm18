const fs = require("node:fs")

function randomNums() {
  const numbers = [];
  for (let i = 0; i < 100; i++) {
    const rand = Math.floor(Math.random() * (2000 + 1)); 
    numbers.push(rand);
  }
  return numbers;
}
function writeNumbers(numbers){
    fs.writeFile("./sonlar.txt", "", err=>{
        if(err) console.log(err);
    })
    fs.readFile("./sonlar.txt", "utf-8", (err,data)=>{
        if(err) console.log(err);

    })
    for(let i = 0;i<numbers.length;i++){
        fs.appendFile("./sonlar.txt", `${numbers[i].toString()}\n`, (err) => {
          if (err) console.log(err);
        });
    }
}
function readNumbers(){
    let data1 = ""
    let arr = []
    fs.readFile("./sonlar.txt", "utf-8", (err,data)=>{
        if(err) console.log(err);
        else{
            data1 = data
        }
        arr = data1.split("\n")
        console.log(arr);
        
    })
    
}

let random100 = randomNums();
writeNumbers(random100)
readNumbers()



