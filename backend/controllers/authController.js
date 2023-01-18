const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')


exports.signin = (req, res) => {
    const { email, password } = req.body
    User.findOne({ email }, (err, user) => {
        if (err || !user)
            return res.status(200).send(
                'User not found with this email.'
            )
        if (!user.authenticated(password))
        {
            return res.status(200).json(
                'Incorrect password'
            )
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET
        )

        res.cookie('token', token, { expire: new Date() + 8062000 })
        user.hashed_password = undefined
        user.salt = undefined
        return res.json({ token, user })
    })
}

exports.signout = (req, res) => {
    res.clearCookie('token')
    res.json({ message: 'User Signed out' })
}