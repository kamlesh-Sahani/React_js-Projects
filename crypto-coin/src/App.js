
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Coins from './Components/Coins';
import Exchanges from './Components/Exchanges';
import Home from './Components/Home';
import Loading from './Components/Loading';
import CoinsDetails from './Components/CoinsDetails';
import Chart from './Components/chart';
function App() {
  return <>
   <Router>
      <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/exchanges' element={<Exchanges/>}/>
            <Route path='/coins' element={<Coins/>} />
            <Route path='/coin/:id' element={<CoinsDetails/>} />
            <Route path='/chart' element={<Chart/>} />
        </Routes>
    </Router>
  </>
}

export default App;
