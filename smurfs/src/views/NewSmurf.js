import React, { Component } from 'react';
import axios from "axios"
import { connect } from "react-redux"
//import styled from "styled-components";
import { postNewSmurf } from "../actions/index"
class SmurfForm extends React.Component {
    nameRef = React.createRef();
    ageRef = React.createRef();
    heightRef = React.createRef()
    onAdd = (e) => {
        e.preventDefault()
        this.props.postNewSmurf({
            name: this.nameRef.current.value,
            age: this.ageRef.current.value,
            height: this.heightRef.current.value,
        })
        this.nameRef.current.value = "";
        this.ageRef.current.value = "";
        this.heightRef.current.value = "";
    }

    render() {
        return (
            <div>
                <h1>Add New Smurf</h1>
                <form >
                    <input
                        // onChange={props.handleInputChange}
                        placeholder="name"
                        ref={this.nameRef}
                        name="name"
                    />
                    <input
                        // onChange={props.handleInputChange}
                        placeholder="age"
                        ref={this.ageRef}
                        name="age"
                    />
                    <input
                        // onChange={props.handleInputChange}
                        placeholder="height"
                        ref={this.heightRef}
                        name="height"
                    />
                    <button type="submit" onClick={this.onAdd}>Add to the village</button>
                </form>
            </div>
        );
    }
}

// const FormWrapper = styled.div `
//   border: 1px solid red;
//   width: 40%;
//   margin: 50px auto;


//   form  {
//     display: flex;
//     flex-direction: column;
//   }
//   input {
//     display: block;
//     height: 40px;
//     padding: 5px;
//     margin-bottom: 10px;
//     font-size: 1.2rem;
//     outline: none;
//   }

//   button {
//     margin-top: 10px;
//     height: 35px;
//     font-size: 1.2rem;
//     background-color: #ccc;
//     color: #222;
//   }
// `


export default connect(null, { postNewSmurf })(SmurfForm);
