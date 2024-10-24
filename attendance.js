// const express= require("express");
// const { loadavg } = require("os");
// const app = express();

// var bodyparser=require("body-parser");

// app.use(bodyparser.json())

// let emp=[
    
//        { id:1,name:"vamshi"},
//        { id:2,name:"sai"},
//        { id:3,name:"surekha"},
//         {id:4,name:"nandini"}

    
// ]
// let aRecordes=[]
// app.post("/attendce",(req,res)=>{
//     const {employeeId, date}=req.body

//     const employe= emp.find(e=>e.id===employeeId)
//     if(!employe){
//         return res.status(400).send({message:"employe not found"})
//     }
//     const attendce= {employeeId,date};
//     aRecordes.push(attendce);
//     res.status(200).send({message:"attendce marked sucessfuly",attendce})

// });
// app.get('/attendance', (req, res) => {
//     res.status(200).send(aRecordes);
// });




// app.listen(8000,()=>{
//     console.log("Server running 8000");
    
// })


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let employees = [
    { id: 1, name: 'vamshi ' },
    { id: 2, name: 'virat' },
    { id: 3, name: 'dhoni' },
    { id: 4, name: 'Suresh Rain' },
];
app.get('/att', (req, res) => {
    res.status(200).send(employees);
});

let aRecords = [];


app.post('/attendance', (req, res) => {
    const { employeeId, date } = req.body;
    const employee = employees.find(emp => emp.id === employeeId);

    if (!employee) { 
        return res.status(404).send({ message: 'Employee not found' });
    }

    const attendance = { employeeId, date };
    aRecords.push(attendance);
    res.status(200).send({ message: 'Attendance marked successfully', attendance });
});

 


app.listen(2000, () => {
    console.log(`Server running on port 2000`);
});
