const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

//message for successfully lands on home page
app.get("*",(req,res)=>{
    res.send({
        message: "Hello world!",
      });
});

//for add
app.post("/add",(req,res)=>{
   const num1 = req.body.num1;
   const num2 = req.body.num2;
   const result = num1+num2;
   if(typeof(num1)==='string'|| typeof(num2)==='string'){
    res.send(
        {
        status: "error",
        message: "Invalid data types",
        });
   }
   
   else if(num1>1000000 || num2>1000000  || result>1000000)
   {
    res.send(
        {
        status: "error",
        message: "Overflow",
        });
   }
   else if(num1<-1000000 || num2<-1000000 || result<-1000000)
   {
    res.send(
        {
        status: "error",
        message: "Underflow",
        });
   }
   else{
   res.send({
              status: "success",
              message: "the sum of given two numbers",
              sum: result
    });
}
})
app.post("/sub",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = eval(num1-num2);
    if(typeof(num1)==='string'|| typeof(num2)==='string'){
     res.send(
         {
         status: "error",
         message: "Invalid data types",
         });
    }
    
    else if(num1>1000000 || num2>1000000  || result>1000000)
    {
     res.send(
         {
         status: "error",
         message: "Overflow",
         });
    }
    else if(num1<-1000000 || num2<-1000000 || result<-1000000)
    {
     res.send(
         {
         status: "error",
         message: "Underflow",
         });
    }
    else{
    res.send({
               status: "success",
               message: "the difference of given two numbers",
               difference: result
     });
 }
 })

 app.post("/multiply",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = eval(num1*num2);
    if(typeof(num1)==='string'|| typeof(num2)==='string'){
     res.send(
         {
         status: "error",
         message: "Invalid data types",
         });
    }
    
    else if(num1>1000000 || num2>1000000  || result>1000000)
    {
     res.send(
         {
         status: "error",
         message: "Overflow",
         });
    }
    else if(num1<-1000000 || num2<-1000000 || result<-1000000)
    {
     res.send(
         {
         status: "error",
         message: "Underflow",
         });
    }
    else{
    res.send({
               status: "success",
               message: "The product of given numbers",
               result: result
     });
 }
 })
 app.post("/divide",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = eval(num1/num2);
    if(typeof(num1)==='string'|| typeof(num2)==='string'){
     res.send(
         {
         status: "error",
         message: "Invalid data types",
         });
    }
    else if(num2===0)
    {
     res.send(
         {
         status: "error",
         message: "Cannot divide by zero",
         });
    }
    else if(num1>1000000 || num2>1000000  || result>1000000)
    {
     res.send(
         {
         status: "error",
         message: "Overflow",
         });
    }
    else if(num1<-1000000 || num2<-1000000 || result<-1000000)
    {
     res.send(
         {
         status: "error",
         message: "Underflow",
         });
    }
    else{
    res.send({
               status: "success",
               message: "The division of given numbers",
               result: result
     });
 }
 })

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;