const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req,res) =>{
    res.send('News Dragon is Running')
});

app.get('/categories', (req,res) =>{
    res.send(categories)
})
app.get('/news', (req,res) =>{
    res.send(news)
})

app.listen(port, () =>{
    console.log(`Dragon API is running on port: ${port}`)
})