import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import User Pages 
import Home from './User/Home';

//import Components
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
