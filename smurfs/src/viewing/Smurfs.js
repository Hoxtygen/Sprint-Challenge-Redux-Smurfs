import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Smurf from './Smurf';
import {fetchSmurfs } from "../actions/index"

class Smurfs extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }
  
  render() {
    return (
     <SmurfContainer>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              /*<Link to = {`/smurfs/${smurf.id}`}  key={smurf.id}>*/ <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                // handleDelete = {this.props.handleDelete}
              />
              /* </Link>*/
            );
          })}
        </ul>
      </SmurfContainer>
     
    );
  }
}

// Smurf.defaultProps = {
//  smurfs: [],
// };

const SmurfContainer = styled.div `
  border: 1px solid red;
  display: flex;
  flex-direction: column;

  /* ul  {
    display: flex;
    flex-flow:wrap;
    margin: 0 auto;
  } */

  div {
    min-width: 30%;
    background-color: mediumseagreen;
  }
  a {
    text-decoration: none;
  }
`







function mapStateToProps(state) {
  console.log(state)
return {
  smurfs: state.smurfs,
  fetching:state.fetching,
  error:state.error
};
}

export default connect(
mapStateToProps,
{
 fetchSmurfs
}
)(Smurfs);

