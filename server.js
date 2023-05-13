const appFactory = require('./appFactory.js')
const app = appFactory()

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    console.log(req.body);
})

const port = 80
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`)
})
