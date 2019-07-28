import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { animateSpaProjects } from './animate-spa-projects';

class SpaProjects extends Component {

  componentDidMount() {
    animateSpaProjects();
  }

  render() {
    return (
      <div className="projects-grid">
        <Grid>
          <Cell col={4}>
            <Card className="card-spa" shadow={5} style={{}}>
              <CardTitle className="card-title" style={{ background: 'url(https://pp.userapi.com/c850032/v850032230/1dd404/s0i8XrqnkNQ.jpg)' }}>
                Quiz
              </CardTitle>
              <CardText className="card-text">
                Одностраничное приложение по созданию тестов. Заходите -> авторизуетесь -> получаете возможность создать свой тест. 
              </CardText>
              <CardActions border>
                <Button href="https://react-quiz-90be0.firebaseapp.com/" target="_blank" colored>
                  Live demo
                </Button>
                <Button href="https://github.com/muratmavlidov/React-Quiz" target="_blank" colored>
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card className="card-spa" shadow={5} style={{}}>
              <CardTitle className="card-title" style={{ background: 'url(https://pp.userapi.com/c855736/v855736230/a3583/S7JeCJ6C04A.jpg)' }}>
                Todo List
              </CardTitle>
              <CardText className="card-text">
                Запомнить всё невозможно, но не с этим приложением для создания и управления списком дел.
              </CardText>
              <CardActions border>
                <Button href="https://front-end.info/TodoList/" target="_blank" colored>
                  Live demo 
                </Button>
                <Button href="https://github.com/muratmavlidov/TodoList-React-" target="_blank" colored>
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card className="card-spa" shadow={5} style={{}}>
              <CardTitle className="card-title" style={{ background: 'url(https://pp.userapi.com/c850532/v850532230/179c79/1LD_agp3Zmo.jpg)' }}>
                StarDB
              </CardTitle >
              <CardText className="card-text">
                Путешествие по вселенной звёздных воин: персонажи, корабли, характеристики. Зачем? Для вас ностальгия, для меня практика хорошей и скоростной работы с сервером
              </CardText>
              <CardActions border>
                <Button href="https://github.com/muratmavlidov/StarDB-React-" target="_blank" colored>
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card className="card-spa" shadow={5} style={{}}>
              <CardTitle className="card-title" style={{ background: 'url(https://pp.userapi.com/c850228/v850228856/1a36df/RPihbRt6ppw.jpg)' }}>
                Card-payment
              </CardTitle >
              <CardText className="card-text">
                Интерактивная страница оплаты товара картой онлайн. Отлично подойдет для различного рода интернет магазинов
              </CardText>
              <CardActions border>
                <Button href="https://front-end.info/Payment-Form/" target="_blank" colored>
                  Live demo
                </Button>
                <Button href="https://github.com/muratmavlidov/card-payment-form-jQuery-" target="_blank" colored>
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card className="card-spa" shadow={5} style={{}}>
              <CardTitle className="card-title" style={{ background: 'url(https://pp.userapi.com/c855536/v855536856/a6f0c/_iKVH8kmkYg.jpg)' }}>
                Shopping summary
              </CardTitle >
              <CardText className="card-text">
                Удобная и интерактивная карта товаров для интернет магазинов. С возможностью внесения промокода и калькулятором
              </CardText>
              <CardActions border>
                <Button href="https://shopping-summary.firebaseapp.com/" target="_blank" colored>
                  Live demo
                </Button>
                <Button href="https://github.com/muratmavlidov/shopping-summary-React-" target="_blank" colored>
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default SpaProjects;