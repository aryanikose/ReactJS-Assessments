import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/package3.jpg";


function About() {
return (
<section id="about" className="about-section">
<div className="about-grid">
<div className="about-text">
<h2>About Us</h2>
<p>
DreamTrip Tourism is a trusted travel company offering carefully designed
holiday experiences across India and international destinations.
</p>
<p>
We focus on comfort, safety, and unforgettable memories for solo
travellers, families, and corporate groups.
</p>
</div>
<div className="about-image">
<img src={aboutImg} alt="About DreamTrip" />
</div>
</div>
</section>
);
}


export default About;