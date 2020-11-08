const express = require('express')
const app = express()
const port = 3000
 
app.get('/', express.static('public'))
app.listen(port, () => console.log(`Recipes  app is listening at http://localhost:${port}`))
