import React from 'react'

class Character extends React.Component {
    render() {
        // console.log(this.props.character.name)
        
        return (
            <div className="character"> 

            <h3> {this.props.character.name} </h3>
            <img alt={this.props.character.name} className= "image" src= {this.props.character.img} /> 
            <br/>
            <small>{this.props.character.show} </small>
            </div>

        )  
    }  
}

export default Character