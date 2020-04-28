const fs = require("fs");

//读数据
const usersString = fs.readFileSync("./db/users.json").toString(); //字符串
const usersArray = JSON.parse(usersString); //数组

//写数据
const user3 = { id: 3, name: "tom", passwod: "yyy" };
usersArray.push(user3);
const string = JSON.stringify(usersArray);
fs.writeFileSync("./db/users.json", string);
