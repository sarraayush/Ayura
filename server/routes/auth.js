const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
var bcrypt = require('bcryptjs');
const user = require('../models/User');

router.post('/register' , async(req , res)=>{

   try
   {
    const { email , password} = req.body;
    if(!(email && password))
        {
            res.status(400).json({message: "please complete all the fields"});
        }
    const getuser = await user.findOne({email: email});
    if(getuser)
        {
            res.status(400).json({message: "User already exist!"});
        }
    
    const bcryptHash = await bcrypt.hash(password , 10);

    user.create({
        email: email,
        password: bcryptHash
    });

    res.status(200).json({
        message : "user created Successfully"
    });

   }
   catch(error)
   {

    res.status(500).json({message : error.message});

   }


})


router.post('/login' , async(req ,res)=>{

    try{
        const { email , password} = req.body;
    if(!(email && password))
        {
            res.status(400).json({message: "please complete all the fields"});
        }
        const getuser = await user.findOne({email: email});
        if(!getuser)
            {
                res.status(400).json({message: "please register first!"});
            }
        
        if(getuser && (await bcrypt.compare(password, getuser.password)))
            {
                const Jwt = await jwt.sign(
                    {
                        id : getuser._id,

                    },
                    process.env.JWT_TOKEN
                );

                getuser.token = Jwt;

                const options = {
                    expires : new Date(Date.now() + 3600 * 24 * 60 * 60 * 1000),
                    httpOnly : true
                }

                res.status(200).cookie("token", Jwt , options).json({
                    success : true
                });

            }

    }
    catch(error)
    {

        res.status(500).json(
            {
                message : error.message
            }
        )
    }

})


module.exports = router;