const express = require("express")
const app = express()
const cors = require('cors');
const PORT = process.env.PORT || 5000
require("dotenv").config();
const ConnectToDatabase = require("./db/connect")
const Course_Router=require("./routes/course")

app.get("/", (req, res) =>
{
    res.send("Hi I am Rushikesh Biradar")
})

app.use(cors());
app.use("/api/courses", Course_Router);

const start =async () =>
{
    try {
        ConnectToDatabase(process.env.MONGODB_URL);
        app.listen(PORT, () =>
        {
            console.log(`Server is Started on PORT ${PORT}`)
        })
        
    } catch (error) {
        console.log(error)
    }
}

start()
