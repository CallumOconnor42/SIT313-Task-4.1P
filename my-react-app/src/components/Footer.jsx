import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribe-section">
        <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="footer-links">
        <div className="explore">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="support">
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="stay-connected">
          <h3>Stay connected</h3>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <p>DEV@Deakin 2022</p>
      <ul className="legal">
        <li>Privacy Policy</li>
        <li>Terms</li>
        <li>Code of Conduct</li>
      </ul>
    </footer>
  );
};

export default Footer;