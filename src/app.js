//importing require module 
const express =  require('express')
const app = express();
require('./db/connection')

//importing route
const basicRouter = require('./router/basicRoute')

//this is for the port-> remote port or port local 
const port = process.env.PORT || 3000;

//for json conversion
app.use(express.json())

//adding router
app.use(basicRouter);



//this is for the teat
const  testObject =  {
    Name:"ankit ",
    age:24,
    city:"mumbai"
}


app.listen(port,()=>{
    console.log("Server is on");
})



