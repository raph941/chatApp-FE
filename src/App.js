import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import RoutePaths from './Router/RoutPaths'
import Footer from './components/Footer'
import Generic from './components/GenericComponent'

function App() {
  return (
    <div className="container app">

      <Navbar />
      <Generic />

      <RoutePaths />

      <Footer />
      
    </div>
  );
}

export default App;
