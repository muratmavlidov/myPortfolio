import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { animateSiteProjects } from './animate-site-projects';

class SiteProjects extends Component {

  componentDidMount() {
    animateSiteProjects();
  }

  render() {
    return (
      <div className="projects-grid">
        <Grid>
          <Cell col={4}>
            <Card className="card-site" shadow={5} style={{}}>
              <CardTitle className="card-title" style={{ background: 'url(https://pp.userapi.com/c850636/v850636642/172eb3/gfkFWwdg260.jpg)' }}>
                Lenoma
              </CardTitle>
              <CardText className="card-text">
                Страница интернет магазина по продаже косметики, вёрстка под wordpress. 
              </CardText>
              <CardActions border>
                <Button href="https://front-end.info/Lenoma/" target="_blank" colored>
                  Live demo
                </Button>
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card className="card-site" shadow={5} style={{}}>
              <CardTitle className="card-title" style={{ background: 'url(https://pp.userapi.com/c858020/v858020642/28ca2/vUYcFqKksuQ.jpg)' }}>
                Brume
              </CardTitle>
              <CardText className="card-text">
                Сайт-визитка для студии дизайна и интерьера. Вёрстка по новым стандартам. 
              </CardText>
              <CardActions border>
                <Button href="https://front-end.info/Brume/" target="_blank" colored>
                  Live demo
                </Button> 
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card className="card-site" shadow={5} style={{}}>
              <CardTitle className="card-title" style={{ background: 'url(https://pp.userapi.com/c852224/v852224576/175423/4bKq8kIQkYg.jpg)' }}>
                VR_Box
              </CardTitle >
              <CardText className="card-text">
                Одностраничный сайт-презентация по продаже очков виртуальной реальности VR Box.  
              </CardText>
              <CardActions border>
                <Button href="https://front-end.info/VR_Box/" target="_blank" colored>
                  Live demo
                </Button>
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card className="card-site" shadow={5} style={{}}>
              <CardTitle className="card-title" style={{ background: 'url(https://pp.userapi.com/c857428/v857428856/2ae31/n4rOXdt_raY.jpg)' }}>
                Good cardboard
              </CardTitle >
              <CardText className="card-text">
                Лендинг по производству упаковок из гофрокартона с доставкой по всей России. 
              </CardText>
              <CardActions border>
                <Button href="https://front-end.info/good_cardboard/" target="_blank" colored>
                  Live demo
                </Button>
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card className="card-site" shadow={5} style={{}}>
              <CardTitle className="card-title" style={{ background: 'url(https://pp.userapi.com/c855032/v855032856/9f6d5/Lb1qKKywNrU.jpg)' }}>
                Minimo
              </CardTitle >
              <CardText className="card-text">
                Однастраничный сайт-фотодневник в стиле минимализма.
              </CardText>
              <CardActions border>
                <Button href="https://front-end.info/Minimo" target="_blank" colored>
                  Live demo
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default SiteProjects;