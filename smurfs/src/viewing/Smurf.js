import React from 'react';
import styled from "styled-components";

const Smurf = props => { 
  return (
    <SingleSmurf>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {/* <button type = "button" onClick = {() => props.handleDelete(props.id)}>Delete</button> */}
    </SingleSmurf>
  );
};

// Smurf.defaultProps = {
//   name: '',
//   height: '',
//   age: ''
// };

const SingleSmurf = styled.div `
  border: 1px solid magenta;
  min-width: 30%;
  margin: 10px;
  padding: 5px;
 

  button {
    border: 1px solid red;
    border-radius: 5px;
    background-color: #ba110c;
    color: #fff;
    outline: none;
  }

 
`

export default Smurf;

