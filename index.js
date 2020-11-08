const express = require('express')
const app = express()
const port = 3000
const users = require('./users.json');
const products = require('./products.json');
app.get('/', express.static('public'))
app.get('/api/users', (req, res) =>{
    res.json(users);
})
app.get('/api/products', (req, res) =>{
    res.json(products);
})
app.listen(port, () => console.log(`Users  app is listening at http://localhost:${port}`))
