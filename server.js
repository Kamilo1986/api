const express = require('express');
const cors = require('cors');
const {conncetDB, connectDB} = require('./config/db');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path'); 

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use(express.statics(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,async ()=>{
    console.log(`Server is running on port ${PORT}`);
    const {sequelize} = require('./config/db');
    try{
        await sequelize.sync();
        console.log("database connected");
    }catch(err){
        console.error("error base de datos",err);
    }
})

