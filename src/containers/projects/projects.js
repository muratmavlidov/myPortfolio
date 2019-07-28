import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell  } from 'react-mdl';
import SiteProjects from './site-projects/site-projects';
import SpaProjects from './spa-projects/spa-projects';
import './projects.sass';

class Projects extends Component {
  state = {
    activeTab: 0
  };

  toggleCategories() {

    if (this.state.activeTab === 0) {
        return (
          <SiteProjects />
        )
    } else if (this.state.activeTab === 1) {
        return(
          <SpaProjects />
        )
    }

  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={ (tabId) => this.setState({activeTab: tabId}) } ripple>
          <Tab>HTML / CSS</Tab>
          <Tab>Javascript / React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content"> { this.toggleCategories() } </div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;