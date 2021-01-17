const express = require('express');
const app = express()
const PORT = 5000
const {MONGOURI} = require('./keys');
const mongoose  = require('mongoose');
//geyBt6rzNC2GhVz

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeahh...")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})


require('./models/user')
require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))


app.listen(PORT,()=>{
    console.log("Server is running", PORT)
})
