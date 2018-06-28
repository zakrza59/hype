import React, { Component } from 'react';
import MobileContainer from './components/mobile/MobileContainer';
import DesktopContainer from './components/dekstop/DesktopContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width < 768;

    if(isMobile) {

    return (
      <div className="App">
        <MobileContainer/>
        <MobileContainer/>
      </div>
    );  
  } else {
      return (
        <div className="App">
          <DesktopContainer/>
          <DesktopContainer/> 
        </div>
      );
    }  
  }
}

export default App;
