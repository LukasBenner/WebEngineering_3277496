const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const jwt = require('jsonwebtoken');


router.get('/info', async (req, res)=>{

  //Get token from header
  const token = req.get('authorization');
  
  //Decode token and get id
  const {id} = jwt.verify(token, process.env.TOKEN_SECRET);
  
  //get User info for id
  const user = await User.findOne({_id: id});
  if(!user){
    return res.status(400).send({error: 'no user'});
  }
  return res.status(200).send(
  {'user': 
    {
      'name': user.name,
      'email': user.email
    }
  });
});

module.exports = router;