const { restart } = require('nodemon')
const { find } = require('../models/BetModel')
const Bet = require('../models/BetModel')

// CREATE BET
const createBet = async (req, res) => {
    const bet = new Bet(req.body)

    try {
        if(!req.body){
            res.status(400)
            throw new Error('Must fill out required fields')
        }

        await bet.save()

        res.status(200).json(bet)
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
}

// GET BET
const getBet = async (req, res) => {
    try {
        const bet = await Bet.findById(req.params.id)

        if(!bet){
            res.status(400)
            throw new Error('Bet does not exist')
        }

        res.status(200).json(bet)
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
}

// GET ALL BETS
const getAllBets = async (req, res) => {
    try {
        const allBets = await Bet.find()

        if(!allBets){
            res.status(400)
            throw new Error('No bets exist')
        }

        res.status(200).json(allBets
            .sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
            })
        )
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
}

// UPDATE BET
const updateBet = async (req, res) => {
    try {
        const bet = await Bet.findById(req.params.id)

        if(!bet){
            res.status(400)
            throw new Error('Bet does not exist')
        }

        // const updatedBet = await bet.updateOne({ $set: req.body })
        const updatedBet = await Bet.findByIdAndUpdate(req.params.id, req.body, {new: true})
        
        res.status(200).json(updatedBet)
        
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
}

// DELETE BET
const deleteBet = async (req, res) => {
    try {
        const bet = await Bet.findById(req.params.id)

        if(!bet){
            res.status(400)
            throw new Error('Bet does not exist')
        }

        await bet.deleteOne()
        
        res.status(200).json('Bet successfully deleted')
        
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
}

module.exports = {
    createBet,
    getBet,
    getAllBets,
    updateBet,
    deleteBet,
}




