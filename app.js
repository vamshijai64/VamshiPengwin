const express= require('express')

const app = express();
app.get('/',  (req,res)=>{
    res.send('Hello world')
})
app.get("/vamshi",(req,res)=>{

    res.send("hi vamshi")
})
app.get("/sai/:id",(req,res)=>{
    const id  =req.params
    res.send("hi sai")
})
app.post('/data', (req,res)=>{
    const recivedata= req.body;
    res.send({
        message:"Data Recived",
        data:recivedata
    })
    })
    app.get('/getmessage' ,function(req,res){
        res.send(recivedata)
    })
app.listen(9000,function(req,res){
    console.log("running");
    
})