import React from 'react';
import logoImage from './../img/logo-white.png';

const Logo = () => {
	return (
		<div className="header__logo-box">
			<img src={logoImage} alt="Logo" className="header__logo" />
		</div>
	)
}

export default Logo;