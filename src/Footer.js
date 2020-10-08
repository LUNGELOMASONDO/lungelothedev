import React from 'react';
import './App.css';

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
				<a href="tel:+27744928558" className="material-icons wa-icon">
					local_phone
				</a>
				<hr />
				&#169; Lungelo: The Developer
			</footer>
        );
    }
}

export default Footer;