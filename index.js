const express = require('express');
const redis = require('redis');
const cors = require('cors');

const port = process.env.PORT || 3000;

const redisClient = redis.createClient({
    host: 'redis-server',
    port: 6379
});
redisClient.set('visits', 0);

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

app.get('/visits', (req, res) => {
    redisClient.get('visits', (err, visits) => {
        res.send(`Number of visits is ${visits}`);
        redisClient.set('visits', parseInt(visits) + 1);
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});