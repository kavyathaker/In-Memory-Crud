const express = require('express')
const app = express()
const port = 3000
const product_routes = require('./routes')
app.use(express.json())
app.use('/api/products', product_routes)

app.listen(port, ()=>{
    console.log(`Server listening at ${port}`)
})
