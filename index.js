const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World from Express')
})

app.get('/api/helloworld', (req, res) => {
    res.send('Hello from an API')
})

app.use(express.static('./public'))

app.listen(port, () =>{
    console.log(`Listening to http://localhost:${port}.`)
})
