const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello Word")
})

app.listen(3000);