import React from "react";





function Description(props) {


    return (

        <div>
            <h3>Episode {props.item.episode_id}: {props.item.title}</h3>
            <p>
                {props.item.opening_crawl}
            </p>
            <p>
                Director: {props.item.director}
            </p>
        </div>

    );


}


export  default  Description
