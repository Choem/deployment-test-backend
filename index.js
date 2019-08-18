const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

const data = {
    data: [
        { id: 1, name: 'Chiem Janssen', age: 22, gender: 'MALE' },
        { id: 2, name: 'Tjarlie Fox', age: 21, gender: 'FEMALE' },
        { id: 3, name: 'Timmethy Dalton', age: 22, gender: 'MALE' }
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