const express = require('express')
const routers = require('./router/router')
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

routers(app)
require('dotenv').config()

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})