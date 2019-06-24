import React from "react";
import { connect } from "react-redux";
import styled from "styled-components"
//import Loaders from "react-loader-spinner";

// import actions
import { fetchSmurfs, removeSmurf } from "../actions/index"
import Smurf from "./Smurf"

class SmurfList extends React.Component {
  componentDidMount() {
    // call our action
    this.props.fetchSmurfs()
  }

  render() {
    const smurfs = this.props.smurfs
    // if (this.props.fetching) {
    //   // return something here to indicate that you are fetching data
    //   return <Loaders />
    // }
    // return this.props.error ? (<p>{this.props.error}</p>) :
    //  (
    //   <div className="CharactersList_wrapper">
    //     <Smurf smurfs={this.props.smurfs} />
    //   </div>
    // );

    return (
        <SmurfWrapper>
            <h1>Hello Smurflist</h1>
            {   
                // this.props.fetching ?  <div>Loading....</div> :

                smurfs.map(smurf => {
                    return <Smurf 
                    smurf={smurf} 
                    key = {smurf.id}
                    removeSmurf = {this.props.removeSmurf}
                     />
                })
            }
        </SmurfWrapper>
    )
  }
}

const SmurfWrapper = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    fetching:state.fetching,
    error:state.error
  };
}

export default connect(
  mapStateToProps,
  {
   fetchSmurfs,
   removeSmurf
  }
)(SmurfList);
