import React, { Component } from 'react'
import Smurf from "./Smurf";
import axios from "axios";

export default class SingleSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: []
        }
    }

    handleDelete = async(id) => {
      try {
        const SmurfList = await axios.delete(`http://localhost:3333/smurfs/${id}`)
          .then(() =>{
            this.props.fetchData()
            this.props.history.push('/');
          })
       
      } catch (e) {
        this.setState({
          errorMessage: e.message
        })
      }
    }

    componentDidMount() {
        this.fetchSmurf(this.props.match.params.id)
      }
    
      fetchSmurf = async(id) => {          
        try {
            const smurfsData = await axios.get(`http://localhost:3333/smurfs/${id}`);
        this.setState({
          smurf: smurfsData.data
        })
        //debugger
        } catch (error) {
            console.log(error);
            
        }
       
      }


    render() {        
        const { name, age, height, id } = this.state.smurf;                
        return (
            <div>
             <Smurf 
             name = {name}
             age = {age}
             height = {height}
             />
             <button type = "button" onClick = {() => this.handleDelete(id)}>Delete</button>
             <button type = "button">Edit</button>
            </div>
        )
    }
}
