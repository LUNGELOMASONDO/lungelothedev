import React from 'react';
import swal from 'sweetalert';
import WorkerSVG from './undraw_hello_aeia.svg';
import Toolbox from './toolbox.png';
import './App.css';

class Content extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			page: 0
		};
		this.contactme = this.contactme.bind(this);
		this.handleHomePage = this.handleHomePage.bind(this);
		this.handleWorkPage = this.handleWorkPage.bind(this);
	}
	contactme() {
		swal({
			title: 'Send me a whatsapp:',
			text: "Mind if I got your name?", 
			content: "input",
			buttons: "Send"
		})
		.then((value) => {
			if(value !== null){
				if(value.length > 1){
					window.location.href = "https://wa.me/+27744928558?text=Hey Lungelo my name is " + value + ", I'm looking for a developer.";
				}
				else{
					window.location.href = "https://wa.me/+27744928558?text=Hey Lungelo, I'm looking for a developer.";
				}
			}
		});
	}
	handleWorkPage() {
		this.setState({
			page: 1
		});
	}
	handleHomePage() {
		this.setState({
			page: 0
		});
	}
    render() {
		if(this.state.page === 1){
			return (
				<div id="content-wrap" style={{paddingTop: "10px"}}> 
					<button id="backhome-btn" onClick={this.handleHomePage} style={{color: "grey"}}>
						&#8592;
					</button>
					<br />
					<div className="row">
						<h2>Nothing to see currently. <br/> Stay tuned for cool upcoming projects</h2>
					</div>
				</div>
			);
		}
		else{
			return (
				<div id="content-wrap"> 
					<div id="hello-world">
						<img src={WorkerSVG} alt="developer avi"/>
						<div id="intro-sect">
							<p> Hey, I'm Lungelo the developer your go to guy for most things software development related. </p>
							<div id="my-buttons">
								<button id="my-work-btn" onClick={this.handleWorkPage}> My portfolio </button>
								<button id="get-in-touch-btn" onClick={this.contactme}> Get in touch </button>
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
}

export default Content;