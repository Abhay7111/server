const fs = require("fs");
const gaamadata = require("./gaama")

const datafromfs = fs.appendFileSync("./gaama.js", "");
console.log(datafromfs)
console.log(gaamadata)