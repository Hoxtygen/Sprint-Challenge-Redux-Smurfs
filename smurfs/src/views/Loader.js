import React, { Component } from 'react';
import Loader from "react-loader-spinner";


export default class Loaders extends Component {
    render() {
        return (
            <div>
                <Loader
                    type="Grid"
                    color="#00BFFF"
                    height="100"
                    width="100"
                />
            </div>
        )
    }
}

