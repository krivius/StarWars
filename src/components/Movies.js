import React from 'react';
import Main from './Main';


function Movies(props){

        const active = {
                color: "#fff"
        }
        return (
            <li><a style={props.active ? active : null}
                        onClick={ props.handleClick(props.item.episode_id)}>
                    {props.item.title}
                </a>
            </li>
        );

}


export  default  Movies