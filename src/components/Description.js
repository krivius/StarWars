import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import MyPortal from "./Portal";
import Modal from './Modal'


class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
        return(
            <Modal isOpen={true}/>
        )
    }


    render(props) {
        return (
            <div>
                <h3>Episode {this.props.item.episode_id}: {this.props.item.title}</h3>
                <p>
                    {this.props.item.opening_crawl}
                </p>
                <p>
                    Director: {this.props.item.director}
                </p>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Leave a review, would ya?..</legend>
                        <input type="text" name="username" placeholder="Your name" onChange={this.handleChange}/><br/>
                        <input type="email" name="email" placeholder="Your e-mail" onChange={this.handleChange}/><br/>
                        <textarea rows="4" cols="75" type="text" name="review" placeholder="Your review" onChange={this.handleChange}/><br/>
                        <button>Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}


export  default  Description
