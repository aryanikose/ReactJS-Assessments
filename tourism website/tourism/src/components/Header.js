import React from "react";
import "../styles/Header.css";


function Header() {
return (
<header className="header">
<div className="logo">DreamTrip</div>
<nav className="nav-links">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#packages">Packages</a>
<a href="#contact">Contact</a>
</nav>
</header>
);
}


export default Header;