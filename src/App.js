// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import { Route, Routes } from "react-router-dom";
import './App.css';
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <SocialLinks />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
