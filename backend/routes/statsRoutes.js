const express = require('express')
const router = express.Router()
const { getTotalBets, getTotalWonBets, getTotalLostBets, 
        getTotalWinnings, getTotalLost, getOverallEarnings } = require('../controllers/statsController')

router.get('/total', getTotalBets)
router.get('/won', getTotalWonBets)
router.get('/lost', getTotalLostBets)
router.get('/money_won', getTotalWinnings)
router.get('/money_lost', getTotalLost)
router.get('/earnings', getOverallEarnings)


module.exports = router