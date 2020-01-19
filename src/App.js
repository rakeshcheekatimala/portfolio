import React, { Component } from 'react';
import { Logo, About, Skills, TechnicalSkill } from './components';
import './sass/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <Logo />
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Rakesh</span>
              <span className="heading-primary--sub">Senior Software Engineer</span>
            </h1>
            <a href="#about-me" className="btn btn--gold btn--animated">
              Read More
            </a>
          </div>
        </header>
        <About />
        <TechnicalSkill />
        <Skills />
      </div>
    );
  }
}

export default App;
