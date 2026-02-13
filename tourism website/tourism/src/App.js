import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';

import "./styles/App.css";

function App() {
return (
<div className="app-container">
<Header />
<Home />
<About />
<Packages />
<Contact />
<Footer />
</div>
);
}


export default App;