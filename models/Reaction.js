const { Schema, Types } = require('mongoose');
const dataFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: 'ReactionBody is Required',
            maxlength: 280
        },

        username: {
            type: String,
            required: 'Username is Required'
        },

        createAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = ReactionSchema;