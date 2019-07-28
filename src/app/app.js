import React, { Component } from 'react';
import './app.sass';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../components/main/main';
import { Link } from 'react-router-dom';
import animateLinks from './app-animate';

class App extends Component {

  componentDidMount() {
    animateLinks();
  }

  render() {
    return (
      <div style={{height: '100vh', position: 'relative'}}>
        <Layout fixedHeader>
          <Header className="header-color" title={<Link to="/" style={{textDecoration: 'none'}}>
                  <span className="header-title"><strong>M</strong>avlidov <strong>M</strong></span></Link>}>
            <Navigation>
                <Link to="/resume" className="nav-link">Резюме</Link>
                <Link to="/aboutme" className="nav-link">Обо мне</Link>
                <Link to="/projects" className="nav-link">Проекты</Link>
                <Link to="/contact" className="nav-link">Контакты</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Резюме</Link>
                <Link to="/aboutme">Обо мне</Link>
                <Link to="/projects">Проекты</Link>
                <Link to="/contact">Контакты</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
