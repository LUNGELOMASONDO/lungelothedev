import React from 'react';
import './App.css';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div id="page-container">		    
            <Content />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
