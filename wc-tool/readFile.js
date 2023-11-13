const fs = require("fs");

const filePath = "./test.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;
  //   console.log(data);

  let splitData = data.split(", ");

  console.log(splitData);
});
