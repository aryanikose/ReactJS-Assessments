import React from "react";
import "../styles/Home.css";
import banner from "../assets/banner.jpg";


function Home() {
return (
<section id="home" className="home-section">
<img src={banner} alt="Travel banner" className="home-banner" />
<div className="home-text">
<h1>Explore the world with comfort and confidence</h1>
<p>Your journey begins with DreamTrip Tourism</p>
</div>
</section>
);
}


export default Home;