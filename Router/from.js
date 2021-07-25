const express = require("express")
const router = express.Router();
const useSchema = require('../model/userSchema');
const bcrypt = require('bcrypt');


//REGISTER
router.post("/register", async (req,res) => {
    const { username, email, number, password, gender } = req.body;

    if(!username || !email || !number || !password || !gender){
        return res.status(500).json({error:"Plz complate the register from"})
    }

    try {

    const userExist = await useSchema.findOne({email: email});
    if(userExist){
        res.status().json('email allready exist plz change the email')
    }else {
       const salt = await bcrypt.genSalt(11);
       const hashedPassword = await bcrypt.hash(req.body.password, salt);

       const useSchema = new useSchema({username, email, number, hashedPassword, gender})

       await useSchema.save()

       res.status().json({message: "registration succses full"})
    }
        }catch(error){
            res.status(500).json(error)
        }
  });



//LOGIN
router.post("/login", async (req,res) => {
    try{
    const useSchema = await useSchema.findOne({email: email});
    !useSchema && res.status(404).json("user not found")

    const validPassword = await bcrypt.compare(password, useSchema.password)
    !validPassword && res.status().json("wrong password..   plz enter the valid password")

    res.status(200).json(useSchema)
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;