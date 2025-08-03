import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import User Pages
import Home from './User/Home';
import Welcome from './User/Welcome';

// Import Components
import Header from './Components/Header';
import Footer from './Components/Footer';

function AppLayout() {
  const location = useLocation();

  // Determine if we're on the Welcome page
  const isWelcomePage = location.pathname === '/';

  return (
    <div className="App flex flex-col min-h-screen">
      {!isWelcomePage && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </main>

      {!isWelcomePage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
