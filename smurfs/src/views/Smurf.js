import React from "react";
import styled from "styled-components"

const Smurf = props => {
  //console.log(props)
  return <SmurfWrapper>
    <h3>Name: {props.smurf.name}</h3>
    <p>Age: {props.smurf.age}</p>
    <p>Height: {props.smurf.height}</p>
    <button onClick = {props.removeSmurf(props.smurf.id)}>Delete</button>
  </SmurfWrapper>

};

const SmurfWrapper = styled.div `
  border: 1px solid #ccc;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  background-color: #f7f7f2;
`
export default Smurf;
