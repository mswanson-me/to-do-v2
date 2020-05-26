const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    id: {
        type: id,
        required: true
    },

    username: {
        type: String,
        required: true
    }
});

const PostSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: 'public'
    },

    description: {
        type: String,
        required: true
    },

    createDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('post', PostSchema);