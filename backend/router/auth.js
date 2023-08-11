const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// db connection
require('../db/conn');

// Import userSchema
const User = require('../model/userSchema');

// Main Content
router.get('/',(req,res)=>{
    res.send(`Hello World from the router`);
});

// Usig Promises
// router.post('/register',(req,res) =>{

//     // get user data
//     const {name, email, phone, work, password, cpassword} = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:'Please Fill the required field'});
//     }

//     // find existing users
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:'Email Already Exist'});
//         }

//         // get users data
//         const user = new User({name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword});

//         // save users data to database
//         user.save().then(()=>{
//             res.status(201).json({message:"User Registered Successfully"});
//         }).catch((err)=>res.status(500).json({error:"Failed to Register"}));

//     }).catch(err =>{console.log(err);});

// });


// registration using async
router.post('/register', async (req,res) =>{

    // get user data
    const {name, email, phone, work, password, cpassword} = req.body;
    // check all filled are filled up or not
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:'Please Fill the required field'});
    }

    try {
        // find existing users
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"Email Already Exist"});
        // check password and confirm password matched or not
        }else if(password !== cpassword){
            return res.status(422).json({error:"password and confirm password mot matched"});
        }else{
        
            // get users data
            const user = new User({name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword});

            // save users data to database (password already hashed in userSchema file);
            await user.save();
            res.status(201).json({message:"User Registered Successfully"});
        }


    }catch (error) {
        console.log(error);
    }

});

// Login Page
router.post('/signin', async (req, res)=>{
    
    try {
        // get user data
        const {email, password} = req.body;
        // check for black space
        if(!email || !password){
            return res.status(400).json({message:"Please fill the data"});
        }
        // find the user in the database
        const userLogin = await User.findOne({email:email});
        if(userLogin){
        // password verify 
        const isMatch = await bcrypt.compare(password, userLogin.password);

        const token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie('jwtoken', token, {expires:new Date(Date.now()+25892000000),httpOnly:true});

        // if invalid data login error
        if(!isMatch){
            res.status(400).json({error:"Invalid Login details"});
        }
        // if valid data login success
        else{
            res.json({Message:"User Login Successfully"});
        }

        }else{
            res.status(400).json({error:"Invalid Login details"});
        }
        

        

    } catch (error) {
        console.log(error);
    }
})



module.exports = router;