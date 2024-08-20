import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import routing components
import Navbar from './components/navbar/navbar.jsx';
import StartingHeading from './components/StartingHeading/StartingHeading.jsx';
import ImageSlider from './components/ImageSlider/ImageSlider.jsx';
import Starting from './components/Starting/Starting.jsx';
import About from './components/About/About.jsx';
import Footer from './components/Footer/Footer.jsx';
import Squares from './components/Squares/Squares.jsx';  
 // Import Signup component
import Team from './components/Team/Team.jsx';        // Import Team component

function App() {
  const slides = [
      { image: './images/Image1.png' },
      { image: './images/Image2.png' },
      { image: './images/Image3.png' }, 
  ];

  return (
    <Router>
      <div className="App">
        <Squares 
          speed={0.5} 
          size={40} 
          direction='diagonal' 
          borderColor='#fff'
          hoverFillColor='#222'
        />
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <StartingHeading />
              <ImageSlider slides={slides} />
              <Starting />
              <About />
              <Starting /> {/* Reusing the Starting component */}
            </>
          } />
           {/* Signup route */}
          <Route path="/team" element={<Team />} />      {/* Team route */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
