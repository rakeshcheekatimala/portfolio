import React from 'react';

const Skills = () => {
  return (
    <section className="section-features" id="skill-features">
      <div className="u-center-text u-margin-bottom-big primary-hightlight">
        <h2 className="heading-secondary">Educational & Social Interests</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="feature-box">
            <i className="feature-box__icon icofont-education"></i>
            <div className="feautre-box__education-content">
              <h3 className="heading-tertiary u-margin-bottom-small">Education Details</h3>
              <p className="feature-box__text">
                Pursuing Post Graduate Degree from Upgrad <strong>2019-2020</strong>.
                <br />
              </p>
              <p className="feature-box__text">
                Completed Bachelors in <strong>Computer Science </strong> from Vignan Insitute of
                Science of Technology during <strong>2008-2012.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="feature-box">
            <i className="feature-box__icon icofont-ui-social-link"></i>

            <h3 className="heading-tertiary u-margin-bottom-small">Socail Media</h3>
            <div className="feature-box__social">
              <a href="https://www.linkedin.com/in/rakesh-cheekatimala/" target="blank">
                <i className="feature-box__icon icofont-linkedin"></i>
              </a>
              <a href="https://github.com/rakeshcheekatimala" target="blank">
                <i class="feature-box__icon icofont-github"></i>
              </a>

              <a href="https://twitter.com/cheekatimala/" target="blank">
                <i className="feature-box__icon icofont-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="feature-box">
            <i className="feature-box__icon icofont-heart"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Personal Interests</h3>
            <ul className="feature-box__hobbies">
              <li>
                <span> Travelling</span> <br />
              </li>
              <li>
                <span> Cooking</span>
                <br />
              </li>
              <li>
                <span> Listening Podcast</span>
              </li>
              <li>
                <span> Philosophy</span>
              </li>
              <li>
                <span> Netflix & Chill</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
