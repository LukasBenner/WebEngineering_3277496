const express =  require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const weatherRoute = require('./routes/weather');
const userInfoRoute = require('./routes/userInfo');
const cors = require('cors'); 

dotenv.config();

const host = process.env.DATABASE ? process.env.DATABASE : 'localhost';

try {
  mongoose.connect(
    `mongodb://${host}:27017/homepage`,
    () => console.log('connected to db!')
  )
} catch (error) {
  console.log(error);
}


const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: ['GET','POST']
};

app.options('*', cors(corsOptions)) // include before other routes

app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/user', userInfoRoute);
app.use('/api/weather', weatherRoute);


app.listen(8000, () => console.log('Server listening on port 8000'));