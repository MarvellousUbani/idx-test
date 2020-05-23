import React from 'react';
import Logo from '../../logo.png';

const Header = () => (
    <nav className="nav-sidebar">
			<img src={Logo} className="logo res-img" alt="logo"/>
			<ul className="nav-list">
				<li><a href="/">Profile</a></li>
				<li><a href="/help">Help</a></li>
			</ul>
		</nav>

)


export default Header