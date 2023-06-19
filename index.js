const express = require("express");
const app = express();
const port = 3000;
const  router =  require("./src/api/index");

router(app);


app.listen(port, (Error) => {
    if(Error){
        console.log("deu erro")
        return;
    }
console.log("servidor rodando")
})