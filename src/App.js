import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import RoutePaths from './Router/RoutPaths'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container app">

      <Navbar />

      <RoutePaths />

      <Footer />
      
    </div>
  );
}

export default App;
