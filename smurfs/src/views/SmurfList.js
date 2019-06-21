import React from "react";
import { connect } from "react-redux";
//import Loaders from "react-loader-spinner";

// import actions
import { fetchSmurfs } from "../actions/index"
import Smurf from "./Smurf"

class SmurfList extends React.Component {
  componentDidMount() {
    // call our action
    this.props.fetchSmurfs()
  }

  render() {
    console.log(this.props.smurfs)
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
        <div>
            <h2>Hello smurflist</h2>
            {   
                // this.props.fetching ?  <div>Loading....</div> :

                smurfs.map(smurf => {
                    return <Smurf smurf={smurf} key = {smurf.id} />
                })
            }
        </div>
    )
  }
}


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
)(SmurfList);
