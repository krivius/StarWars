import React from 'react';
import Movies from './Movies';
import Description from './Description.js';

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            movies: []
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
                        movies: result.results
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

    handleClick(event){
        console.log(event)
    }

    render() {



        const movieList = this.state.movies.map(function(item, i){
            if(i === 0){
                return(
                    <Movies key={item.episode_id}
                            handleClick={this.handleClick}
                            item={item}
                            active={true}/>
                )
            }else{
                return(
                    <Movies key={item.episode_id}
                            handleClick={this.handleClick}
                            item={item}/>
                )
            }
        })

        const descr = this.state.movies.map(function(item, i){
            if(i === 0){
                return(
                    <Description key={item.episode_id} descr={item.opening_crawl} title={item.title}/>
                )
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