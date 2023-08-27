//Load up express
const express = require('express')
const { getStockPrices, postTest, getHome, getParamsTest, middleWareInterceptor } = require('./routes')
const app = express()
const port = 3000

// Middleware
app.use(express.json()) //.json is used to allow our project to retrive json that may come in a post request
app.use(require('cors')()) // Allow cross origin request. Install in terminal using npm i cors
app.use(middleWareInterceptor)



//Define routes
app.get('/', getHome);

app.get('/api/stock', middleWareInterceptor, getStockPrices )

app.get('/api/testParams/:bananaKeywork', getParamsTest)

app.post('/api/test', postTest)




//Define a port
app.listen(port, () => console.log(`Server has started on port: ${port}`))