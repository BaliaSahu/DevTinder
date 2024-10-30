const express=require('express');

const app=express();
app.use((req,res)=>{
      res.send("this is slash..!!1.");
})
app.use("/test",(req,res)=>{
      res.send("Hello from the servers")
})
app.use("/hello",(req,res)=>{
      res.send("Hello Hello Hello");
})
app.listen(7000,()=>{
      console.log("7000 server listening..")
})