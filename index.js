const express = require('express');
const app = express();

app.use(express.static('build'))

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});



app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});
