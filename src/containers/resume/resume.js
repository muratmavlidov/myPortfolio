import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { animateResume } from './resume-animate';
import './resume.sass';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {

  componentDidMount() {
    animateResume();
  }

  render() {

    return(
      <div className="resume-page">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                className="resume-avatar"
              />
            </div>

            <h2 style={{ paddingTop: '1em' }}>Murat Mavlidov</h2>
            <h4 style={{ color: 'grey' }}>Frontend developer</h4>

            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

            <p className="descr-text">
              В один прекрасный день я решил связать свою жизнь с веб-программированием, а именно, с frontend разработкой. Создание клиентской (визуальной) части сайтов, интернет-магазинов, мобильных приложений и мн. др. Для меня это ещё один мир, в который можно погрузиться и самореализовываться в нём.
              На сегодняшний день, я с уверенностью могу сказать, что делаю свою работу качественно, с максимальной отдачей, которая в последствии имеет отличный результат. Проекты, которые я осуществляю, помогают малому и среднему бизнесу расширить клиентскую базу благодаря такой огромной сфере, как интернет. Повысить лояльность клиентов, качество их обслуживания, сделать свой продукт доступным и отвечающим современным требованиям. Что в конечном итоге повышает доход того или иного предприятия. Если вы преследуете одну из тех целей, которые я описал выше, тогда обязательно свяжитесь со мной и мы сделаем это вместе! 
            </p>

            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

            <h5>Location</h5>
            <p>Moscow</p>
            <h5>Phone</h5>
            <p>+7(916)287-89-54</p>
            <h5>Email</h5>
            <p>mavlidoff@mail.ru</p>

            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Образование</h2>

            <Education 
              startYear={2015}
              endYear={2020}
              schoolName={'МГУТУ имени К.Г. Разумовского'}
              schoolDesc={'Государственный университет технологий и управления. На сегодняшний день университет имеет статус ведущего российского вуза, готовящего специалистов в различных отраслях.'}
            />

            <Education 
              startYear={2018}
              endYear={2018}
              schoolName={'Академия вёрстки'}
              schoolDesc={'Самая крупная онлайн школа СНГ, ведущая узконаправленные курсы по веб-разработке и обучению языку программирования - Javascript. Обучение от самых азов, до создания крупных и высоконагруженных проектов.'}
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Опыт</h2>

            <Experience 
              startYear={2018}
              endYear={'...'}
              jobName={'Freelance'}
              jobDesc={'Я набирался опыта от самых небольших заказов в виде правок на сайтах, оптимизации нагрузки и скорости сайтов, исправление и доработка скриптов до полноценных проектов под ключ, над которыми работали я и мои партнёры. От создания прототипа проекта и дизайна до построения логики и выгрузки в production. '}
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Навыки</h2>
            <Skills skill="HTML5" progress={100} />
            <Skills skill="CSS3" progress={100} />
            <Skills skill="javascript" progress={90} />
            <Skills skill="React" progress={80} />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;