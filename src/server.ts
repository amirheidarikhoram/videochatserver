import express = require('express')

const app = express()

app.get('*', (req: express.Request, res: express.Response) => {
    res.send('Hello')
})

app.listen(3001, () => console.log('Running'))