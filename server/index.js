const express = require('express')
const router = require('./Router/router')
const connectDB = require('./Mongodb/mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const multer = require('multer')
const app = express()


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

connectDB()
dotenv.config()
console.log(process.env.JWT_SECRET)
app.use(cors())
app.use(express.json())
app.use('/', router)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})