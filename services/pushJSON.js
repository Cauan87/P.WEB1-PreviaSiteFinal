const fs = require("fs");
const localdb = `${__dirname}/../localdb.json`;
let dbContent = fs.readFileSync(localdb, "utf8");
let db = JSON.parse(dbContent);
var comprimento = Object.keys(db.jogos).length;

module.exports = { fs, localdb, dbContent, db, comprimento };