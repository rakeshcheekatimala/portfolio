import React from 'react';
import VideoMp4 from './../img/video.mp4';
import VideoWebm from './../img/video.webm';
import frontEnd from './../img/frontend.jpeg';
import backEnd from './../img/backend.jpeg';
import infra from './../img/cloud.jpeg';
import technicalData from './../data/portfolio';

const TechnicalSkill = () => {
  let { technicalskill_sections } = technicalData;
  let { frontend_skills, backend_skills, infrastructure_skills } = technicalskill_sections;
  return (
    <section className="section-stories" id="technical-skills">
      <div className="bg-video">
        <video className="bg-video__content" autoplay muted loop>
          <source src={VideoMp4} type="video/mp4" />
          <source src={VideoWebm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Technical Areas of Expertise</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={frontEnd} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Front End</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">Front End Technologies</h3>

            <div className="story__list">
              {frontend_skills.map(val => {
                return <span class="story__skill">{val}</span>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={backEnd} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Back End</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">BackEnd Technologies</h3>
            <div className="story__list">
              {backend_skills.map(val => {
                return <span class="story__skill">{val}</span>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={infra} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Infra Skills</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">Deployment & Build Skills</h3>
            <div className="story__list">
              {infrastructure_skills.map(val => {
                return <span class="story__skill">{val}</span>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#skill-features" className="btn-text">
          Read More &rarr;
        </a>
      </div>
    </section>
  );
};

export default TechnicalSkill;
