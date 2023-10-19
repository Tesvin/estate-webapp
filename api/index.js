import express from 'express'

const app = express()

app.listen(300, () => {
    console.log('Server is runing on port 3000')
})