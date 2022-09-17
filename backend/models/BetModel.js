const mongoose = require('mongoose')

const BetSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true,
        max: 50,
    },

    wager: {
        type: Number,
        required: true,
    },

    outcome: {
        type: String,
        required: true,
    },

    payout: {
        type: Number,
        required: true,
        default: 0,
    }
}, {timestamps: true})

module.exports = mongoose.model('Bet', BetSchema)