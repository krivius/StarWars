import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies.js';
import Description from './components/Description.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          movies: []
    };
  }

    componentDidMount() {
        fetch("https://swapi.dev/api/films/")
            .then(res => res.json())
            .then(
                // console.log(res);
                (result) => {
                    this.setState({
                        isLoaded: true,
                        movies: result.items
                    });
                    console.log(result);
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


  render() {

      console.log(this.state.movies)
    const Movies = this.state.movies.map(item => <Movies episode_id={item.episode_id} item={item}/> )

    return (
        <div className="App">
            {Movies}
             <Description/>
        </div>
    );
  }
}

export default App;
