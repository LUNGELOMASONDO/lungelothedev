import React from 'react';
import profileImg from './profile2.jpg';
import './App.css';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <img id="profile-img" src={profileImg} alt="Lungelo Masondo" />
                <h3><span id="my-name">Lungelo</span><span>: The Developer</span></h3>
                <a href="tel:+27744928558" data-tooltip={this.props.cell} className="material-icons wa-icon">
                    local_phone
                </a>
            </nav>	
        );
    }
}

export default Nav;