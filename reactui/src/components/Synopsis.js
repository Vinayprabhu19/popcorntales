import React, { Component } from "react";
import parse from "html-react-parser";
import Typography from "@mui/material/Typography";

class Synopsis extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.props) === JSON.stringify(this.props)) return false;
    return true;
  }
  render() {
    return (
      <div>
        {this.props.synopsis.split("\n").map((para, index) => (
          <Typography
            key={index}
            variant={"body1"}
            textAlign={"justify"}
            gutterBottom
          >
            {parse("<span>" + para + "</span>")}
          </Typography>
        ))}
      </div>
    );
  }
}

export default Synopsis;
