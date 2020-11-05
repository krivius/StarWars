import React from 'react';
import Movies from './Movies';
import Description from './Description.js';


class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            movies: [],
            curr_ep: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch("https://swapi.dev/api/films/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        movies: result.results,
                        curr_ep: result.results[0].episode_id
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    handleClick(id){
        this.setState(() =>{
                 return {curr_ep: id}
            }
        )
    }

    render() {

        const movieList = this.state.movies.map(item=> <Movies key={item.episode_id} handleClick={this.handleClick} item={item}/> )
        const curr_ep = this.state.curr_ep;
        const descr = this.state.movies.map(function(item){
            if(item.episode_id === curr_ep){
                return(
                    <Description key={item.episode_id} item={item}/>
                )
            }else{
                return null;
            }
        })


        return (
            <div className="wrapper">
                <div className="movies">
                    <ul>
                        {movieList}
                    </ul>
                </div>
                <div className="description">
                    {descr}
                </div>
            </div>
        );
    }


}

export  default  Main