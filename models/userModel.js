const mongoose = require('mongoose');


const user = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, require: true },
    message: { type: String, require: true }
})

const newuser = new mongoose.model('user', user);
module.exports = newuser;