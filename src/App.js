import { NavLink, Route, BrowserRouter as Router, Routes, } from 'react-router-dom'

import About from './components/pages/about/about';
import Contact from './components/pages/contact/contact';
import Footer from './components/pages/layout/footer/footer';
import Home from './components/pages/layout/home/home';
import Navigation from './components/pages/layout/header/navigation';

function App() {
  return (

    <>

      <Navigation/>


        <Router>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      <Footer />
    </>
  );
}

export default App;
