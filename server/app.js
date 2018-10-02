import express from 'express'
import path from 'path'

const resolve = (pth) => path.resolve(__dirname, pth)
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(resolve('../public')))
app.use((req, res, next) => res.sendFile(resolve('../public/index.html')))

app.listen(PORT, function () {
  console.log(`Server listening @ http://localhost:${PORT}`)
})
