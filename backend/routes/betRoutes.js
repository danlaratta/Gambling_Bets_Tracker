const express = require('express')
const router = express.Router()
const {createBet, getBet, getAllBets, updateBet, deleteBet } = require('../controllers/betController')

router.post('/', createBet)
router.get('/:id', getBet)
router.get('/', getAllBets)
router.put('/:id', updateBet)
router.delete('/:id', deleteBet)


module.exports = router