import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>

      <Route path={'/'} element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
