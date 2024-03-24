const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const userRoute = require('../routes/userRoute.js');

const app = express();
app.use(bodyParser.json())

const port = 3000;

app.use('/home', userRoute);

mongoose.connect(
    'mongodb+srv://jayshreebawankar:jayshree@cluster0.6oqyews.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(() => (
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
)).catch(e => console.log('error found'));
