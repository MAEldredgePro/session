const appFactory = require('./appFactory.js')
const app = appFactory()

app.get('/', (req, res) => {
    res.render('index', { sessionID: req.sessionID })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    req.session.username = req.body.username
    res.send(`Hello ${req.session.username}. Your session ID is
    ${req.sessionID} and your session expires in
    ${req.session.cookie.maxAge} milliseconds.`)
})

const port = 80
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`)
})
