import React from 'react' 
import Characters from '../Components/Characters'
import Form from '../Components/Form'
import api from '../api.js'
import Filter from '../Components/Filter'


class Container extends React.Component {
    state = {
        api: api, 
        searchValue: ""
    }
    
     renderCharacters =  () =>{
       return this.filterCharacters().map(characterObj => <Characters character={characterObj} /> )
    }

    searchHandler = (event) => {
        console.log(event.target.value)
        this.setState({ searchValue: event.target.value})
    }

   filterCharacters =() => { 
       return this.state.api.filter(character => character.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }

    submitHandler = (newCharacterOBj) => {
        console.log(newCharacterOBj)
        let newArray = [...this.state.api, newCharacterOBj]
        this.setState({api: newArray})
    }
    render() {
        // console.log(this.state.searchValue)
        
    //  debugger
        return (

            <div>
            <h1>Index</h1>
            <h1> Characters </h1>
            {this.renderCharacters()}
            <Form submitHandler= {this.submitHandler}/>
            <Filter searchHandler={this.searchHandler}/>
            </div>
        )
    }
}

export default Container 