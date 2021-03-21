require('./config/db-config')
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const upload = require('express-fileupload')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')



const port = process.env.PORT || 2500
const app = express()

//middlewares
app.use(upload())
app.use(express.static(path.join(__dirname, './public')))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))



//setting view engine
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))
hbs.registerPartials(__dirname + '/views/partials');

//setting session
app.use(session({
  secret: 'thisisatemplate',
  resave: true,
  saveUninitialized: true
}))

//passportjs setup
app.use(passport.initialize())
app.use(passport.session())

//setting routes
const main = require('./routes/main')

//usimg routes
app.use('/', main)


app.listen(port, ()=> {
  console.log(`Server is up and running on port ${port}`)
})