const Bet = require('../models/BetModel')


// GET TOTAL BET STATS
const getTotalBets = async (req, res) => {
    try {
        const totalBets = await Bet.countDocuments({}).exec()

        res.status(200).json(totalBets)
    } catch (error) {
        res.status(500)
        res.json({error: error.message})
    }
}

// GET WON BET STATS
const getTotalWonBets = async (req, res) => {
    try {
        const wonBets = await Bet.countDocuments({outcome: 'Won'}).exec()

        res.status(200).json(wonBets)
    } catch (error) {
        res.status(500)
        res.json({error: error.message})
    }
}

// GET WON BET STATS
const getTotalLostBets = async (req, res) => {
    try {
        const lostBets = await Bet.countDocuments({outcome: 'Lost'}).exec()

        res.status(200).json(lostBets)
    } catch (error) {
        res.status(500)
        res.json({error: error.message})
    }
}

const getTotalWinnings = async (req, res) => {

    try {
        const wonBets = await Bet.find({payout: {$gt: 0}})

        const totalWinnings = wonBets.reduce(function(a, b){
            return a + b.payout;
        }, 0);

        res.status(200).json(totalWinnings)

    } catch (error) {
        res.status(500)
        res.json({error: error.message})
    }
}

const getTotalLost = async (req, res) => {

    try {
        const lostBets = await Bet.find({payout: 0})

        const totalLost = lostBets.reduce(function(a, b){
            return a + b.wager;
        }, 0);

        res.status(200).json(totalLost)

    } catch (error) {
        res.status(500)
        res.json({error: error.message})
    }
}

const getOverallEarnings = async (req, res) => {

    try {
        const wonBets = await Bet.find({payout: {$gt: 0}})
        const lostBets = await Bet.find({payout: 0})

        const totalLost = lostBets.reduce(function(a, b){
            return a + b.wager;
        }, 0);

        const totalWinnings = wonBets.reduce(function(a, b){
            return a + b.payout;
        }, 0);

        const earnings = totalWinnings - totalLost 

        res.status(200).json(earnings)

    } catch (error) {
        res.status(500)
        res.json({error: error.message})
    }
}

module.exports = {
    getTotalBets,
    getTotalWonBets,
    getTotalLostBets,
    getTotalWinnings,
    getTotalLost,
    getOverallEarnings,
}