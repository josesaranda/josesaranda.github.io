import React, { Component } from "react";
import { changePageTitle, showMenu } from "../../util";
import './About.less';

import image from './assets/profile.jpeg';

export class About extends Component {

  componentDidMount(){
    changePageTitle('About');
    showMenu();
  }
  
  render(){
    return (
      <div className="josesaranda-about">
        <div id="cv">
          <div className="introduction">
            <img src={image} alt="José Sánchez Aranda" />
            <div className="description">
                <h1>José Sánchez Aranda</h1>
                <h2>Software Engineer</h2>
                <p>
                    I consider myself a proactive person with concerns.
                    I like to make proposals to improve. I am self-taught, observant, determined
                    and enterprising.
                    <br/><br/>
                    I love nature, freestyle football, fishing and Netflix.
                </p>
            </div>
          </div>
          <div className="technologies">
              <h2>Well known technologies</h2>
              <p>
                  <a href="https://developer.mozilla.org/en/docs/Web/JavaScript" target="_blank" className="front">Javascript</a>
                  <a href="https://www.typescriptlang.org/" target="_blank" className="front">Typescript</a>
                  <a href="https://developer.mozilla.org/en/docs/Web/CSS" target="_blank" className="front">Css</a>
                  <a href="https://developer.mozilla.org/en/docs/Web/HTML" target="_blank" className="front">Html</a>
                  <a href="http://lesscss.org/" target="_blank" className="front">Less</a>
                  <a href="https://sass-lang.com/" target="_blank" className="front">Sass</a>
                  <a href="https://webpack.js.org/" target="_blank" className="front">Webpack</a>
                  <a href="https://babeljs.io/" target="_blank" className="front">Babel</a>
                  <a href="https://es.reactjs.org/" target="_blank" className="front">React</a>
                  <a href="https://angular.io/" target="_blank" className="front">Angular</a>
                  <a href="https://ionicframework.com/" target="_blank" className="front">Ionic</a>
                  <a href="https://www.electronjs.org/" target="_blank" className="front">Electron</a>
                  <a href="https://getbootstrap.com/" target="_blank" className="front">Bootstrap</a>
                  <a href="https://ant.design/" target="_blank" className="front">AntDesign</a>
                  <a href="https://material.io/design" target="_blank" className="front">Material Design</a>
                  <a href="https://momentjs.com/" target="_blank" className="front">momentJS</a>
                  <a href="https://vega.github.io/vega/" target="_blank" className="front">Vega</a>
                  <a href="https://echarts.apache.org/en/index.html" target="_blank" className="front">Echarts</a>
                  <a href="https://www.chartjs.org/" target="_blank" className="front">Chart.js</a>
                  <a href="https://ejs.co/" target="_blank" className="front">EJS</a>
                  <a href="https://nodejs.org/es/" target="_blank" className="back">NodeJS</a>
                  <a href="https://expressjs.com/es/" target="_blank" className="back">Express</a>
                  <a href="https://nodemailer.com/about/" target="_blank" className="back">Nodemailer</a>
                  <a href="https://core.telegram.org/bots" target="_blank" className="back">Telegram-bot</a>
                  <a href="https://socket.io/" target="_blank" className="back">Socket.io</a>
                  <a href="https://strapi.io/" target="_blank" className="back">Strapi</a>
                  <a href="https://loopback.io/" target="_blank" className="back">Loopback</a>
                  <a href="https://nestjs.com/" target="_blank" className="back">NestJS</a>
                  <a href="https://nextjs.org/" target="_blank" className="back">NextJS</a>
                  <a href="https://jwt.io/" target="_blank" className="back">JWT</a>
                  <a href="https://www.python.org/" target="_blank" className="back">Python</a>
                  <a href="https://www.djangoproject.com/" target="_blank" className="back">Django</a>
                  <a href="https://www.mongodb.com/es" target="_blank" className="db">MongoDB</a>
                  <a href="https://www.mysql.com/" target="_blank" className="db">MySQL</a>
                  <a href="https://www.apache.org/" target="_blank" className="server">Apache</a>
                  <a href="https://www.nginx.com/" target="_blank" className="server">Nginx</a>
                  <a href="https://www.jenkins.io/" target="_blank" className="tools">Jenkins</a>
                  <a href="https://pm2.keymetrics.io/" target="_blank" className="tools">Pm2</a>
                  <a href="https://jasmine.github.io/" target="_blank" className="test">Jasmine</a>
                  <a href="https://karma-runner.github.io/latest/index.html" target="_blank" className="test">Karma</a>
                  <a href="https://jestjs.io/" target="_blank" className="test">Jest</a>
              </p>
          </div>
          <div className="experience">
              <h2>Experience</h2>
              <div className="position">
                  <h3>Software Engineer at Shapelets</h3>
                  <h4>May 2019 - Actually</h4>
                  <p className="desc">Front-end everywhere. Creating amazings data visualisations UI with React, Mobx, Vega, Typescript, ...</p>
              </div>
              <div className="divider"></div>
              <div className="position">
                  <h3>CTO - Software Engineer at Sombradoble</h3>
                  <h4>Sept 2016 - Apr 2019</h4>
                  <p className="desc">At Sombradoble S.L I worked with the next technologies: NodeJS, Express, EJS, Loopback and much more... MySQL and MongoDB databases. Angular, AngularMaterial, Bootstrap, HTML, CSS, Javascript and Typescript. I took care of the project requirements, structure, execution and maintenance.</p>
              </div>
              <div className="divider"></div>
              <div className="position">
                  <h3>CTO - Founder of Nowait</h3>
                  <h4>2015 - 2017</h4>
                  <p className="desc">Co-founder of NoWait S.Coop.And. at NoWait we developed our own product called noesperescolas.com, a platform for manage order from copyshops by online and security way.</p>
              </div>
              <div className="divider"></div>
              <div className="position">
                  <h3>Scholarship at Sombradoble</h3>
                  <h4>Apr 2016 - Jul 2016</h4>
                  <p className="desc">In this stage at Sombradoble S.L we develop one hybrid mobile app called MyLeaf. We develop this app with Ionic Framework. MyLeaf allowed to patients with chronic and rare diseases to monitorice their day by day and analice the evolution they have along the time having a more knowledge about their medicaments ingest, activities they did and food they ate. All of this features was served by a server developed with NodeJS which was getting data from a SQLServer database.</p>
              </div>
          </div>
          <div className="education">
              <h2>Education</h2>
              <div className="position">
                  <h3>Software Engineer at University of Malaga</h3>
                  <h4>Dates of study 2012 - 2016</h4>
                  <p className="desc">In this dates I could learn the base of Software Engineering. Some principles like requirements, testing, data structures, etc.</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}