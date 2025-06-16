const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minlength: [2, "Name must be at least 2 characters long"]
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email must be at least 5 characters long"],
        validate: {
            validator: function (v) {
                return /^\S+@\S+\.\S+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    Subject: {
        type: String,
        required: true,
        minlength: [2, "Subject must be at least 2 characters long"]
    },
    Message: {
        type: String,
        required: true,
        minlength: [10, "Message must be at least 10 characters long"]
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
