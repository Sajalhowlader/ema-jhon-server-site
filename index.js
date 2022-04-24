const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("ME Jhon ready where are you ama")
})

app.listen(port, () => {
    console.log('my ema-jhon server is running ', port)
})