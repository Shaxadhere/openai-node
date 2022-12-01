const express = require("express")
const app = express()
require("dotenv").config()


app.use(express.json())

app.use("/talk", require("./routes/talkRoutes"))

app.listen(5000, () => {
    console.log("Listening to server on port: 5000")
})