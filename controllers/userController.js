const newuser = require('../models/userModel.js');
var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'jayshreebawankar27@gmail.com',
//         pass: 'iL0v!My7el5'
//     }
// });


// var mailOptions = {
//     from: 'jayshreebawankar27@gmail.com',
//     to: 'jayshreebawankar37@gmail.com',
//     subject: 'I`m sending Email using nodemailer',
//     text: 'That was interesting'
// };


async function userController(req, res, next) {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            throw new Error('Please fill required details...');
        }

        //Create new user
        const user = await newuser.create({
            name,
            email,
            phone,
            message
        });

        if (user) {
            const { name, email, phone, message } = user;
            res.status(201).json({ name, email, phone, message });
        } else {
            res.status(400).json('Kindly fill up all data');
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = userController;