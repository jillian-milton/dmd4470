const express = require('express') // Imports the express library from the node modules directory
const app = express() // runs express as a function in a variable called app
const port = 3000 // The port number, only one server can run on a port

// Static files 

app.use(express.static('static'))


// '/' is the default endpoint, the root directory
// Get requests are sent to most web servers, shows up in the URL bar
 // Example: https://www.google.com/search?q=uconn+score
// Post requests are used to send passwords, hide information in the URL bar
  // Example: https://phonebook.uconn.edu/lresults.php

  
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})  

// One-off for specific files
app.get('/static/img/chrome.png', (req, res) => {
    res.sendFile(_dirname + '/static/img/chrome.png')
  })  

app.get('/roster', (req,res) => {
    // Let's pretend we got this from a database
    let roster = [
        {name: 'Tom Brady', position: 'QB'},
        {name: 'Rob Gronkowski', position: 'TE'},
        {name: 'Julian Edelman', position: 'WR'},
    ]

    res.send(roster)
    //Sends the Patriots roster as JavaScript Object Notation (JSON)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

