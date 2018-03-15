import React, { Component } from 'react';
import logo from '../forkcircle.png';
import './App.css';
import Menubuttons from '../menuButton/menuButtons.js'
import RecipeInputModal from '../recipeInputModal/recipeInputModal.js'
//import backgroundImage from '../foodwallpaper.jpg';
import Example from '../spinThing.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BasicExample from '../Router.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <img src={backgroundImage} className="background" alt="background" /> */}

        <img src={logo} className="fork_logo" alt="logo" />
        {/* <h1 className="App-title">Where you can find<br /> homemade Montana recipes!</h1> */}
        <p>
        </p>
        <div className="Menubuttons">
          < Menubuttons />
          <RecipeInputModal />
        </div>
        < Example  className="Spin"/>
        <div>
          <br/>
          < BasicExample />
        </div>
        <br />
            <ul>
              <ul class="copyright">
                <p> © Fork, 2018 All rights are given for free. Your Welcome.</p>
              </ul>
            </ul>
      </div>


    )
  }
}

export default App;
