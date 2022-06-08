const mongoose = require('mongoose')
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log('connection successfull mongodb')
}).catch((err) => { console.log(err) });
