// creating localhost on port 3000
const express = require ('express');
const { LEGAL_TCP_SOCKET_OPTIONS } = require('mongodb');
const app = express()
const PORT = 3000;
app.use('/', express.static('public'));


// route to home page- get
app.get('/', (req,res) => {
  res.sendFile(__dirname + '/login.html');
});




// server active
app.listen(PORT);
console.log(`server is active`);
