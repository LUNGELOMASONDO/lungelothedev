import React from 'react';
import WorkerSVG from './undraw_hello_aeia.svg';
import Toolbox from './toolbox.png';
import './App.css';

class Content extends React.Component {
    render() {
        return (
            <div id="content-wrap">
                <div id="hello-world">
					<img src={WorkerSVG} alt="developer avi"/>
					<div id="intro-sect">
						<p> Hey, I'm Lungelo the developer your go to guy for most things software development related. </p>
						<div id="my-buttons">
							<button id="my-work-btn"> View my work </button>
							<button id="get-in-touch-btn"> Get in touch </button>
						</div>
					</div>
				</div>
				<div id="skills-label">
					<img src={Toolbox} alt="Dev Skills" />
				</div>
				<div className="about-me">
					<div className="wordchange"> </div>
				</div>
            </div>	
        );
    }
}

export default Content;