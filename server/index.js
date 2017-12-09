const path = require('path') //eslint-disable-line no-undef
const express = require('express') //eslint-disable-line no-undef
const app = express()

app.use('/static', express.static('static'))
app.use('/assets', express.static('assets'))

app.set('views', path.join(__dirname, 'templates')) //eslint-disable-line no-undef
app.set('view engine', 'pug')

app.get('*', function (req, res) {
  res.status(200).render('index.pug')
})

app.listen(4000, function () {
  console.log('Server listening on port 4000!') //eslint-disable-line no-console
})
