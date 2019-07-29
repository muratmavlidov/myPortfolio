import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { animateContact } from './contact-animate';
import './contact.sass'

class Contact extends Component {

  componentDidMount() {
    animateContact();
  }

  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Murat Mavlidov</h2>
            <div className="avatar-wrap">
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              className="contact-avatar"
            />
            </div>
            <p className="contact-text">
              Вы можете связаться со мной любым удобным для вас способом, обсудить со мной свой проект, задать интересующие Вас вопросы, я с радостью на них отвечу
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact me</h2>

            <hr className="hr" />

            <div className="contact-list" >
              <List>
                <ListItem>
                  <ListItemContent className="item-content">
                    <i className="fa fa-whatsapp"></i>
                    <span>+7(916)287-89-54</span>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="item-content">
                    <i className="fa fa-envelope"></i>
                    mavlidoff@mail.ru
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="item-content">
                    <i className="fa fa-telegram"></i>
                    @mavlidov/t.me
                  </ListItemContent>
                </ListItem>
              </List>
            </div>

          </Cell> 
        </Grid>
      </div>
    )
  }
}

export default Contact;