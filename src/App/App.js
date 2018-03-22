import React, { Component } from 'react';
import logo from '../forkgold.png';
import './App.css';
import Menubuttons from '../menuButton/menuButtons.js';
import RecipeInputModal from '../recipeInputModal/recipeInputModal.js';
import Spinner from '../spinThing.js';
import Contact from '../Us/contact.js';
import About from '../Us/aboutUs.js'
import RecipeListModal from '../recipeListModal/recipeListModal'
import Profile from '../profile.js';
import { render } from 'react-dom'
import ImageMapper from 'react-image-mapper';
import LineChart from 'react-linechart';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="fork_logo" alt="logo" usemap="#image-map"/>
          <map name="image-map">
            <area shape="rect" coords=",,," />
            <area shape="rect" coords=",,," />
            <area shape="rect" coords=",,," />
          </map>
        <div>
                < Profile classname="Profile"/>
        </div>
        <div className="Menubuttons">
          < Menubuttons />
        </div>
        {/* < Spinner className="Spin" /> */}
        <div className="lowerButtons">
              < Contact /> < About />
            <br />
          </div>
          <br />
          <div >
              <ul>
                <p2 class="copyright"> © Fork | 2018 All rights are given for free. You're Welcome.</p2>
              </ul>
          </div>
      </div>
    )
  }
}
