const express = require('express')
const router = express.Router()
const {createBet, getLostBets, getWonBets, getAllBets, updateBet, deleteBet } = require('../controllers/betController')

router.post('/', createBet)
router.get('/losses', getLostBets)
router.get('/wins', getWonBets)
router.get('/all', getAllBets)
router.put('/:id', updateBet)
router.delete('/:id', deleteBet)


module.exports = router