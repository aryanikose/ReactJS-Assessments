import React from "react";
import "../styles/Contact.css";


function Contact() {
return (
<section id="contact" className="contact-section">
<h2>Contact Us</h2>


<div className="contact-layout">
<div className="contact-info">
<p><strong>Address:</strong> 2nd Floor, Travel Plaza, Pune, Maharashtra</p>
<p><strong>Phone:</strong> +91 98765 43210</p>
<p><strong>Email:</strong> support@dreamtrip.com</p>
</div>


{/* Static form layout only */}
<form className="contact-form">
<input type="text" placeholder="Your Name" />
<input type="email" placeholder="Your Email" />
<textarea placeholder="Your Message"></textarea>
<button type="button">Send Message</button>
</form>
</div>
</section>
);
}


export default Contact;