const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();
const PORT = 3001;
const API_KEY = process.env.API_KEY;
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(
    '/v1',
    createProxyMiddleware({
        target: 'https://api.openai.com',
        changeOrigin: true,
        onProxyReq: (proxyReq, req, res) => {
            proxyReq.setHeader('Authorization', 'Bearer ' + API_KEY)
        }
    })
)

console.log("serve!")
app.listen(PORT);