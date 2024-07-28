const express = require("express")
const mongoose = require("mongoose")

const app = express();
app.use(express.json())
const port = 2005;
const mongUrl = "mongodb+srv://Srinivas:Srinivas@cluster0.6skxyer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongUrl,{});
mongoose.connection.on('connected',() => {
    console.log("your MongoDB is connected to Use")
})

const userRoute = require('./Route/userRoute')
const eventRoute = require('./Route/eventRoute')
app.use('/RRR', userRoute)
app.use('/RRR', eventRoute)
app.listen(port, () =>{
    console.log("port connect successfully on" +" " + port)
})