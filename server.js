const fs = require("fs");
const server = require("http").createServer();
let data = 0,
  open = 0,
  end = 0;


server.on("request", (req, res) => {
  const src = fs.createReadStream("./big.file");
  src.pipe(res);
  src.on("open", () => {
    open++;
  });
  src.on("data", (chunk) => {
    data++;
  });
  src.on("end", () => {
    end++;
    console.log(
      `Number of chunks:\n data: ${data},\n open: ${open} \n end:${end}`
    );
    file.end();
  });
});

server.listen(8000);
