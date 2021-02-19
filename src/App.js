import React from 'react';
import swal from 'sweetalert';
import './App.css';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cell: null,
      projects: null
    }
		this.errorLoad = this.errorLoad.bind(this);
  }
  errorLoad(){
    swal({
      icon: 'warning',
      text: 'Problem loading page'
    });
  }
  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/' + 'http://lungelo.mysite.web.za/contacts.php')
    .then(response => response.text())
    .then(data => {
      var contacts =  JSON.parse(data);
      this.setState({
        cell: contacts.cellphone
      })
      //console.log(contacts.cellphone);
    });
    fetch('https://cors-anywhere.herokuapp.com/' + 'http://dimonatefoods.co.za/siteinfo')
    .then(response => response.text())
    .then(data => {
      this.setState({
        projects: JSON.parse(data)
      })
      //console.log(contacts.cellphone);
    });
  }
  render() {
    return (
      <div>
        <Nav cell={"074 492 8558"} />
        <div id="page-container">		    
            <Content cell={"074 492 8558"} projects={this.state.projects} />
            <Footer cell={"074 492 8558"} />
        </div>
      </div>
    );
  }
}

export default App;
