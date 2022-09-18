
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import BetStats from './pages/BetStats';
import BetTransactions from './pages/BetTransactions';
import BetHistory from './pages/BetTransactions';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<BetTransactions />} />
          <Route path='/stats' element={<BetStats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
