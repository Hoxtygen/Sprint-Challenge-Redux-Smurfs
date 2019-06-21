import React, { Component } from 'react';
import axios from "axios"
import styled from "styled-components";

const SmurfForm = (props) => {
  //console.log(props);
  const handleAddSmurf = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3333/smurfs/", {
      name: props.name,
      height: props.height,
      age: props.age
    })
    .then(res => {
      console.log(res);
      
      this.props.history.push('/');
      props.fetchData();
    })
    .catch(err => console.log(err))
};
  
    return (
      <FormWrapper>
        <h1>Add New Smurf</h1>
        <form onSubmit={handleAddSmurf}>
          <input
            onChange={props.handleInputChange}
            placeholder="name"
            value={props.name}
            name="name"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="age"
            value={props.age}
            name="age"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="height"
            value={props.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </FormWrapper>
    );
  }


const FormWrapper = styled.div `
  border: 1px solid red;
  width: 40%;
  margin: 50px auto;


  form  {
    display: flex;
    flex-direction: column;
  }
  input {
    display: block;
    height: 40px;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 1.2rem;
    outline: none;
  }

  button {
    margin-top: 10px;
    height: 35px;
    font-size: 1.2rem;
    background-color: #ccc;
    color: #222;
  }
`

export default SmurfForm;
