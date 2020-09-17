const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyparser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const { name } = req.body
  res.send(`<h1>Hola ${name}!</h1>`)
})

app.listen(3000, () => console.log('Listen on port 3000!'))
