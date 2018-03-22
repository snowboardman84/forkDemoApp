import React, { Component } from 'react';
import logo from '../forkcircle.png';
import './App.css';
import Menubuttons from '../menuButton/menuButtons.js';
import RecipeInputModal from '../recipeInputModal/recipeInputModal.js';
import Spinner from '../spinThing.js';
import Contact from '../Us/contact.js';
import About from '../Us/aboutUs.js'
import RecipeListModal from '../recipeListModal/recipeListModal'
import Profile from '../profile.js';
import { render } from 'react-dom'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="fork_logo" alt="logo" />
        <div className="Menubuttons">
          < Menubuttons />
        </div>
        {/* < Spinner className="Spin" /> */}
        <div className="lowerButtons">
            < Contact />
            <br />
              < About />
          </div>
          <br />
          <div >
              <ul>cd 
                <p2 class="copyright"> © Fork, 2018 All rights are given for free. Your Welcome.</p2>
              </ul>
          </div>
      </div>
    )
  }
}
