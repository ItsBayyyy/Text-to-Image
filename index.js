const express = require('express')
const axios = require('axios')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/generate-image', async (req, res) => {
    const prompt = req.body.prompt
    const response = await axios.get(`https://text-to-image-rose-zeta.vercel.app/tti?prompt=${prompt}`)
    console.log(response)
    res.json({
        imageUrl: response.data.imageUrl
    })
})

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
})
