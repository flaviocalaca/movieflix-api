import express from 'express'

const port = 3000
const app = express()

app.get('/moveis', (req, res) => {
    res.send('Listagem de filmes')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
