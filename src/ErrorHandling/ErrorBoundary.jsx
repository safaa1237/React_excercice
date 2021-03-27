import { Image } from "semantic-ui-react";
import React, { Component } from "react";
import oops from "images/OOPSIN.png";
import ServerAPI from 'utils/ServerAPI';
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error , info) {
    //changing the state of the default haserror state to then show the custom ui
    this.setState({ hasError: true });
    //getting current date
    var today = new Date();
    let creationTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //logging the error in our server
    let serverAPI =  ServerAPI.reportError(error  , info, creationTime); 
    //changing the url 
    window.history.replaceState(null, "Error page", "/Error");
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="">
          <Image src={oops} />
        </div>
      );
    }
    return this.props.children
  }
}

