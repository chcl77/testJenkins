const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello there');
});

app.get('/hello', (req, res) => {
    res.send('this is for hello');
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log('server is listening to 3000');
    });
}

module.exports = app;