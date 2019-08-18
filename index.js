const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const data = {
    data: [
        { name: 'Chiem Janssen', age: 22, gender: 'MALE' },
        { name: 'Tjarlie Fox', age: 21, gender: 'FEMALE' },
        { name: 'Timmethy Dalton', age: 22, gender: 'MALE' }
    ],
    meta: {
        status: 'OK',
        code: 200,
        pageIndex: 1,
        pageSize: 3,
        next: false
    }
}

app.get('/', (req, res) => {
    res.send('Welcome to the deployment test backend.');
});

app.get('/users', (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});