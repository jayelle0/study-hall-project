import React from 'react'

class Form extends React.Component {
    state= {
        name: "", 
        img: "", 
        show: ""
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
        
    }

    submitHandler = (event) => {
        console.log(event.target)
        event.preventDefault() 
        this.setState({name: "", img: "", show: ""})
        this.props.submitHandler({
            name: event.target[0].value,
            img: event.target[1].value,
            show: event.target[2].value,
        })

    }

    render() {
        return (
            <div> 
                <h1> Form</h1>
                <form onSubmit={this.submitHandler}>
                    <input type= "text" name= "name" placeholder= "Insert Name Here" value={this.state.name} onChange={this.changeHandler} /> 
                    <input type= "text" name= "img" placeholder= "Insert Image Here" value={this.state.img} onChange={this.changeHandler}/> 
                    <input type= "text" name= "show" placeholder= "Insert Show Here" value={this.state.show} onChange={this.changeHandler}/> 
                    <input type= "submit"  value ="Create Character"/> 
                </form>
            </div>
        )
    }
}

export default Form