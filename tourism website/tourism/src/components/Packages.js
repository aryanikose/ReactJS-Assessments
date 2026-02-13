import React from "react";
import "../styles/Packages.css";


import p1 from "../assets/package1.jpg";
import p2 from "../assets/package2.jpg";
import p3 from "../assets/package3.jpg";
import p4 from "../assets/package4.jpg";


function Packages() {
return (
<section id="packages" className="packages-section">
<h2>Tour Packages</h2>


<div className="package-grid">
<div className="package-card">
<img src={p1} alt="Goa Beach" />
<h3>Goa Beach Escape</h3>
<p className="price">₹14,999</p>
<p className="duration">3 Nights / 4 Days</p>
<p>Enjoy sunny beaches, water sports and nightlife in Goa.</p>
</div>


<div className="package-card">
<img src={p2} alt="Manali Hills" />
<h3>Manali Hill Adventure</h3>
<p className="price">₹18,500</p>
<p className="duration">4 Nights / 5 Days</p>
<p>Experience snow views, mountain trekking and local culture.</p>
</div>


<div className="package-card">
<img src={p3} alt="Kerala Backwaters" />
<h3>Kerala Backwater Tour</h3>
<p className="price">₹21,000</p>
<p className="duration">5 Nights / 6 Days</p>
<p>Relax in houseboats and explore nature-rich destinations.</p>
</div>


<div className="package-card">
<img src={p4} alt="Dubai City" />
<h3>Dubai City Explorer</h3>
<p className="price">₹59,999</p>
<p className="duration">4 Nights / 5 Days</p>
<p>Luxury shopping, desert safari and modern city attractions.</p>
</div>
</div>
</section>
);
}


export default Packages;