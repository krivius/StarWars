import React from 'react';
import './App.css';

import Main from './components/Main.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
    };
  }



  render() {
    return (
        <div className="App">
            <Main/>
        </div>
    );
  }
}

export default App;
