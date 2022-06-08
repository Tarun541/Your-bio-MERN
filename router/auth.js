const bcrypt = require('bcryptjs/dist/bcrypt');
const express = require('express');
const router = express.Router();
const User = require('../model/userschema');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate')

require('../db/conn');


router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz fill form correctly" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            res.status(422).json({ err: "Email already existed" })
        } else if (password != cpassword) {
            return res.status(400).json({ error: "Passwords are not matching" })

        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword })

            await user.save();
            res.status(200).json({ message: "user registered successfully" })
        }



    } catch (error) {
        console.log(error);
    }


})


//login route

router.post('/signin', async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" })
        }


        const userLogin = await User.findOne({ email: email })


        if (!userLogin) {
            res.status(400).json({ error: "Invalid credentials email" })
        }
        else {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken()
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 2589200000),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials password" })
            }
            else {
                res.json({ message: "user singnin successful" })

            }
        }


    } catch (error) {
        console.log(error)
    }
})

router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser)
})


router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('user logged out');
})




module.exports = router;