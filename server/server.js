const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000

// middlewares
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"));

// connect to the mongodb database
connectDB()


app.use('/api/auth', require("./routes/auth"))
app.use('/api/items', require("./routes/items"))
app.use('/api/payment', cors(), require("./routes/payment"))
app.use('/cart',require("./routes/payment") );

app.listen(PORT, console.log("Server is running on port ", PORT))