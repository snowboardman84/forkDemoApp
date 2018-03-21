import React, { Component } from 'react';
import logo from '../forkcircle.png';
import './App.css';
import Menubuttons from '../menuButton/menuButtons.js';
import RecipeInputModal from '../recipeInputModal/recipeInputModal.js';
import Spinner from '../spinThing.js';
import Contact from '../Us/contact.js';
import About from '../Us/aboutUs.js'




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
          {/* <RecipeInputModal /> */}
        </div>
        < Spinner className="Spin" />
        <div className="lowerButtons">
          <div>
            < Contact />
            <div />
            <br />
            <div>
              < About />
            </div>
          </div>
          <br />
          <div >
              <ul>
                <ul >
                  <p2 class="copyright"> © Fork, 2018 All rights are given for free. Your Welcome.</p2>
                </ul>
              </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
