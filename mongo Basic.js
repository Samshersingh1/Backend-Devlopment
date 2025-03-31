const express=require("express") ;
const app=express(); 
app.use(express.json());

const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://samshersinghbaghel152:hHOXrNWHM8cUPP4B@cluster0.c0iidrv.mongodb.net/userapp");

const  User=mongoose.model('Users',{name:String,
   email:String
   ,password:String
});  


app.post("/sign-up",function(res,req){
    const name=req.body.name
    const email=req.body.email
   const passward =req.body.passward 
const exitUsers=User.findOne({email:name}) 
if(exitUsers) {
     res.json({
         msg:"user already exits"
     }); 
     return 
}  
 
const user=new User({
  name:name ,
  email:email,
  password : passward
});  
user.save(); 
res.json(){
    msg:"user enter into the data base"
} 
});  
  
