

// this line imports the module express
//which is a web framework for Node.js
//you can access the functionality provided by Express to build web applications and APIs.
const express = require("express")



//you are calling the express() function, 
//which initializes an instance of an Express application.
//The app variable now represents your Express application, allowing you to configure it, define routes, and handle requests and responses.

const app = express();


var bodyparser= require("body-parser")
//app.use()====
//This method is used to mount middleware functions in an Express app.
app.use(bodyparser.json())  

//When a request is made to your server with a JSON body 
//(like when you send data via a POST request),
// body-parser will convert the JSON string into a JavaScript object and attach it to req.body.
let emp_id=1;

let users=[
    {
        emp_id:1,
        name:"vamshi",
        is_admin:1,
        email:"vamshijai@54gmail.com",
        phone:"8203280383",
        salary:10000
    }
]
app.get('/users',(req,res)=>{

    res.status(200).send(users);

})
app.post("/user",async(req,res)=>{

    const  {name,is_admin,email,phone,salary}=req.body;
   // console.log(phone,'VAMSI');
    

    if( phone.toString().length !=10){
        console.log("Invaild phone number");
        return   res.status(400).send({message:"invaild phone number"})
 
    }
    if(email!=='@gmail.com$'){

    }
    const isUserexits= users.filter(item=>{

        return  item.email==email || item.phone==phone
    })
    if(isUserexits.length>0){
        return res.status(400).send({message:"phone/email already exits"})
         
    }
    
    emp_id =emp_id+1;
    const newUser={
        emp_id,
        name,
        is_admin, 
        email,
        phone,
        salary
    };
    users.push(newUser);

  res.status(200).send({message:"New user created Successfully",usserdata:newUser})

})


app.listen(9000,()=>{
    console.log("server running 9000");
    


})
// const express = require('express');
// const app = express();

// // Use built-in middleware for parsing JSON
// var bodyparser= require("body-parser")
// app.use(bodyparser.json());


// let users = []; // Initialize your users array
// let emp_id = 0; // Initialize emp_id

// app.post("/user", async (req, res) => {
//     console.log(req.body); // Log the incoming request body
//     const { name, is_admin, email, phone, salary } = req.body;

//     // Check if phone is defined and is a string with a length of 10
//     if ( phone.toString().length !== 10) {
//         console.log("Invalid phone number");
//         return res.status(400).send({ message: "Invalid phone number" });
//     }

//     // Check if user already exists
//     const isUserExists = users.filter(item => {
//         return item.email === email || item.phone === phone;
//     });

//     if (isUserExists.length > 0) {
//         return res.status(400).send({ message: "Phone/email already exists" });
//     }

//     emp_id += 1; 
//     const newUser = {
//         emp_id,
//         name,
//         is_admin,
//         phone,
//         email,
//         salary
//     };

//     users.push(newUser);
//     return res.status(200).send({ message: "New user created successfully", userData: newUser });
// });

// // Start the server
// const PORT = 9000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
