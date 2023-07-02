import React from "react";
import Header from "./Componets/Header";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from "./Componets/Home";
import Contact from "./Componets/Contact";
import Services from "./Componets/Services";
import Footer from "./Componets/Footer";
import "./style/app.scss";
function App (){
  return(
<>
<Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  <Footer/>
</Router>
</>
  );
}
export default App;