
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BetStats from './pages/BetStats'
import Bets from './pages/Bets'
import Home from './pages/Home'
import NewBet from './pages/NewBet'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bets' element={<Bets />} />
          <Route path='/stats' element={<BetStats />} />
          <Route path='/add-bet' element={<NewBet />} />
        </Routes>

        <Footer />
        
      </Router>
    </div>
  )
}

export default App
