const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require("cors")
const app =  express()

app.get("/" , (req,res) => {
    res.json("Connected to Backend1")
})

fetch("http://catfact.ninja/fact")
.then(res => res.json())
.then(data => {console.log(data);})
.catch(error => { console.error('Error fetching data:', error); });






app.use(express.json());
app.use(cors())

app.use('/fact', createProxyMiddleware({ target: 'http://catfact.ninja', changeOrigin: true }));

// Start the server on port 3001
app.listen(3001, () => {
  console.log('Proxy server is running on http://localhost:3001');
});