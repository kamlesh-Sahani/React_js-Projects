import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Hearder from './Components/Hearder';
import './style/app.scss';
import Home from './Components/Home';
function App() {
  return (
    <Router>
      <Hearder />
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
