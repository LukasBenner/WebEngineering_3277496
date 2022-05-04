const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const {registerValidation, loginValidation} = require('../validation')
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res)=>{

  //Validate input
  const error = registerValidation(req.body);
  if(error){
    return res.status(200).send(error);
  }

  //Check for existing user
  const emailExits = await User.findOne({email: req.body.email});
  if(emailExits){
    return res.status(200).send({'message':'already exists'});
  }

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  
  try {
    const savedUser = await user.save();
    res.send({userId: savedUser._id});
  } 
  catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  //Validate input
  const error = loginValidation(req.body);
  if(error){
    return res.status(400).send(error);
  }
  //Check for existing user
  const user = await User.findOne({email: req.body.email});
  if(!user){
    return res.status(400).send({'error':'credentials'});
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass){
    return res.status(400).send({'error':'credentials'});
  }

  //Create and assign token
  const token = jwt.sign({id:user._id}, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token).status(200);

});

router.post('/logout', async (req, res) => {
  res.status(200).send();
});

module.exports = router;