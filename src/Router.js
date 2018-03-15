import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router >
    <div>
      <ul className="routes">
        <ul>
          <Link to="/App.js">Home</Link>
        </ul>
        <ul>
          <Link to="/aboutUs.js">About Us</Link>
        </ul>
        <ul>
          <Link to="/contact.js">Topics</Link>
        </ul>
      </ul>

      <hr />

      <Route path="./App.js" component={Home} />
      <Route path="../aboutUs.js" component={About} />
      <Route path="../contact.js" component={Contact} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>
        askdjhgdlakjhfsldkfj
    </h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Contact = ({ match }) => (
  <div>
    <h2>Topics</h2>
  </div>
);


export default BasicExample;


  {/* <div>
            <ul class='footer-menu'>
              <ul class='footer-link'>
                <Link to='../about.js'>About Us</Link>
              </ul>
              <ul class='footer-link'>
                <Link herf='../contact.js'> Contact Us</Link>
              </ul>
              <ul class='footer-link'>
                <Link herf='../App.js'>Home</Link>
              </ul>
            </ul> 
            <br />
            <ul>
              <ul class="copyright">
                <p> © Fork, 2018 All rights are given for free. Your Welcome.</p>
              </ul>
            </ul>
          </div> */}