import React, { Component } from 'react';
import './App.css';
import SmurfList from '../views/SmurfList';
import SmurfForm from "../views/NewSmurf"
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <Router>
      <AppWrapper>
        {/* <Route exact path = "/" component = {SmurfList} />
        <Route exact path = "/new-smurf" component = {SmurfForm} /> */}
        <SmurfList />
        <SmurfForm />
      </AppWrapper>
      </Router>

    );
  }
}

const AppWrapper = styled.div `
  display: flex;
`

export default App;
