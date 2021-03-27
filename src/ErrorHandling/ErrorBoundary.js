import { Image } from "semantic-ui-react";
import { ServerAPI } from "../utils/ServerAPI";
import React, { Component } from "react";
import oops from "images/OOPSIN.png";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    //changing the state of the default haserror state to then show the custom ui
    this.setState({ hasError: true });
    //logging the error in our server
    ServerAPI.reportError(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="">
          <Image src={oops} />
        </div>
      );
    }
    return this.props.children;
  }
}
