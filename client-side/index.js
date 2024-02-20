const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const port = 3000

// Configure Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

const emojis = require('./static/emojis.json')

// Static Files
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Express Write the HTML
app.get('/emoji-lister-server-side.html', (req, res) => {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emoji Lister</title>
</head>
<body>
    <h1>Emoji Lister</h1>
    <main>`

    for (const item in emojis) {
        html += `<img src="${emojis[item]}" alt="${item}" width="100" height="100">` + "\n"
    }

    html += `</main></body></html>`


    res.send(html)
})

// Nunjucks Writes the HTML
app.get('/emoji-lister-nunjucks.html', (req, res) => {
    let html = nunjucks.render('emoji.njk', {emojis: emojis, title: "Emoji Lister"})
    res.send(html)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})