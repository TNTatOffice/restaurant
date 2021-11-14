// creating localhost on port 3000
const express = require ('express');
const { LEGAL_TCP_SOCKET_OPTIONS } = require('mongodb');
const app = express()
const PORT = 3000;
app.use('/', express.static('public'));


// route to home page
app.get('/', (req,res) => {
  res.sendFile(__dirname + '/login.html');
});

// route to sign in page
app.get('/login', (req,res) => {
    return res.sendFile(__dirname + '/signIn.html');
});

function redirect(){
  const loginClick = document.getElementById('login');
  const signUpClick = document.getElementById('signUp');
  if(loginClick.clicked == true)
  {
    return res.render('/login')
  }
  else if (signUpClick.clicked == true)
  {
    return res.redirect('signUp.html')
  }
};



// server active
app.listen(PORT);
console.log(`server is active`);
