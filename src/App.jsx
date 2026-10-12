import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import DishDetails from './pages/DishDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Welcome from "./components/Welcome/Welcome";
import { useState } from 'react';
function App() {
  
  const [showWelcome, setShowWelcome] = useState(true);
  
  function handlePreview() {
    
    setShowWelcome(false);
  }

  return (

    <Router>

      {showWelcome ? (
        
        <Welcome onPreview={handlePreview} />

      ) : (

        <>
            
          <Navbar />

          <main>

            <Routes>
          
              <Route path="/" element={<Home />} />

              <Route path="/menu" element={<Menu />} />

              <Route path="/dish/:id" element={<DishDetails />} />

              <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/reservation" element={<Reservation />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="*" element={<NotFound />} />

            </Routes>

          </main>


        </>
  )}
    </Router>
    
  );
}

export default App;
