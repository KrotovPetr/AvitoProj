require('dotenv').config();
const express = require('express');
const router = require('./routes');
const fillDB = require('./utils/functions/fillDb')
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json())
app.use('/api', router)
fillDB();

app.listen(PORT, ()=>{
    console.log(`Success, server starts on ${PORT} port`);
})