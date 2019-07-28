import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../../containers/landingpage';
import AboutMe from '../../containers/aboutme';
import Contact from '../../containers/contact';
import Projects from '../../containers/projects';
import Resume from '../../containers/resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;