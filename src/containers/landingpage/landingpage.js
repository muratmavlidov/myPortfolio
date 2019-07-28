import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import {animateLanding} from './landing-animate';
import './landingpage.sass';

class LandingPage extends Component {

  componentDidMount() {
    animateLanding();
  }

  render() {
    return (
      <div style={{width: "100%", margin: "auto"}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" 
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1 className="main-title">Frontend Developer</h1>

              <hr className="hr" />

              <p>HTML/CSS | Bootstrap | Javascript | React</p>

              <div className="social-links">

                {/* LinledIn */}
                <a href="#" target="_blank">
                  <i className="fa fa-linkedin-square"></i>
                </a>

                {/* GitHub */}
                <a href="https://github.com/muratMavlidov" target="_blank">
                  <i className="fa fa-github-square"></i>
                </a>

                {/* JSFiddle */}
                <a href="https://jsfiddle.net/user/lekkiss/fiddles/" target="_blank">
                  <i className="fa fa-jsfiddle"></i>
                </a>

                {/* YouTube */}
                <a href="#" target="_blank">
                  <i className="fa fa-youtube-square"></i>
                </a>
                
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;