import React from 'react';

function Movies(props){

        const active = {
                color: "#fff"
        }
        return (
            <li style={props.active ? active : null}   onClick={()=>props.handleClick(props.item.episode_id)}>
                    {props.item.title}
            </li>
        );

}

export  default  Movies