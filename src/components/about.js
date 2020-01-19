import React from 'react';
import portfolioData from './../data/portfolio';
import LearnImage from './../img/learnbuildmeasure.png';
const About = () => {
	let { about_sections } = portfolioData;
	return (
		<section className="section-about" id="section-about">
			<div className="u-center-text u-margin-bottom-big">
				<h2 className="heading-secondary">
					Build What Customers Love
                                    </h2>
			</div>

			<div className="row">
				<div className="col-1-of-2">
					{about_sections.map(section => {
						return (<div key={section.name} className="section-about__list">
							<h3 className="heading-tertiary u-margin-bottom-small highlight">{section.name}</h3>
							<p className="paragraph">
								{section.description}
							</p>
						</div>)
					})}

					<a href="#skill-features" className="btn-text">Learn more &rarr;</a>
				</div>
				<div className="col-1-of-2">
					<div className="composition">
						<img src={LearnImage} alt="Learn Build Measure" className="composition__photo composition__photo--p1" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;