const mongoose = require('mongoose')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.methods = {
    authenticated: function (text) {
        return this.cryptPassword(text) === this.password
    },
    cryptPassword: function (password) {
        if (!password)
            return ''
        try {
            return crypto.createHmac('sha1', process.env.PASSWORD_SALT)
                .update(password)
                .digest('hex')
        } catch (error) {
            return ''
        }
    }
}

module.exports = mongoose.model('User', userSchema)