import React, { Component, Suspense, lazy } from "react";
import Paper from "@mui/material/Paper";
import ImageLoader from "./ImageLoader";
import Typography from "@mui/material/Typography";

class CardLayout extends Component {
  constructor(props) {
    super(props);
    this.processImageData = this.processImageData.bind(this);
    props.review.titleImage = this.processImageData(props.review.titleImage);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.review.title == nextProps.review.title) return false;
    return true;
  }
  render() {
    return (
      <Paper style={{ margin: "2%" }} elevation={8}>
        <h4 className="title">{this.props.review.title}</h4>
        <a href={this.props.review.title}>
          <ImageLoader
            className="card-image"
            alt={"Popcorn Tales - " + this.props.review.title}
            src={this.props.review.titleImage}
          ></ImageLoader>
          {/* <img className="card-image" alt={"Popcorn Tales - " + this.props.review.title } src={this.props.review.titleImage}/> */}
        </a>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center",paddingLeft:"5px" }}>
            <Typography variant="subtitle2" fontWeight={"bold"} gutterBottom>
              {this.props.review.language}
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center",paddingRight:"5px" }}>
            <Typography variant="subtitle2" fontWeight={"bold"} gutterBottom>
              {this.props.review.rating}/5
            </Typography>
          </div>
        </div>
      </Paper>
    );
  }
  processImageData(image) {
    var width, height;
    var width, height;
    if (window.matchMedia("(max-width: 576px)").matches) {
      width = 150;
      height = 200;
    } else if (window.matchMedia("(max-width: 958px)").matches) {
      width = 200;
      height = 260;
    } else if (window.matchMedia("(max-width: 1300px)").matches) {
      width = 220;
      height = 250;
    } else if (window.matchMedia("(max-width: 2000px)").matches) {
      width = 250;
      height = 300;
    } else {
      width = 400;
      height = 500;
    }
    return image + "&width=" + width + "&height=" + height;
  }
}

export default CardLayout;
