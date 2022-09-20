
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BetStats from './pages/BetStats'
import BetTransactions from './pages/BetTransactions'
import Home from './pages/Home'
import NewBet from './pages/NewBet'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<BetTransactions />} />
          <Route path='/stats' element={<BetStats />} />
          <Route path='/new-bet' element={<NewBet />} />
        </Routes>

        <Footer />
        
      </Router>
    </div>
  )
}

export default App
