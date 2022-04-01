const fs = require("fs")

const file = fs.createWriteStream("./big.file")

for(let i =0; i<= 5e6 ; i ++){
    file.write("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore voluptatum minus repellendus accusamus deleniti harum ratione, illum dolor expedita deserunt vitae, neque eius nisi dolores, nihil quidem nostrum voluptatibus odit.\n")
}

file.end()