const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json())

// projects name: 
// pass : JHZyfM2DZdbeWZHk



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kyfi3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const productsCollection = client.db("eamJhonProducts").collection('products')


        app.get('/products', async (req, res) => {
            const cursor = productsCollection.find({});
            const product = await cursor.toArray()
            res.send(product)
        })


    } finally {

    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("ME Jhon ready where are you ama")
})

app.listen(port, () => {
    console.log('my ema-jhon server is running ', port)
})