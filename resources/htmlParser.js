const { readFileSync } = require("fs");
const users = readFileSync("./resources/users.json", "utf8");
console.log(users);
