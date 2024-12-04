const express = require("express")
const app = express()
require("dotenv").config();
const port = process.env.PORT 
const cors = require("cors")
const bodyParser = require("body-parser")
const {user_router }= require("./routes/user")
const {donar_router} = require("./routes/donar")
const {hospital_router} = require("./routes/hospital")
const {event_router} = require("./routes/comunity")

app.use(cors())
app.use(bodyParser.json())



app.use("/api/v1/user", user_router)
app.use("/api/v1/donar",donar_router )
app.use("/api/v1/hospital",hospital_router )  
app.use("/api/v1/comunity",event_router )


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})  