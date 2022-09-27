const express = require('express')
const router = express.Router()
const { getTotalBets, getTotalWonBets, getTotalLostBets, getTotalWinnings } = require('../controllers/statsController')

router.get('/total', getTotalBets)
router.get('/won', getTotalWonBets)
router.get('/lost', getTotalLostBets)
router.get('/winnings', getTotalWinnings)


module.exports = router