import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import defaultuser from "../../../../../media/defaultuser.jpg";

export default class ThirdStep extends Component {
  constructor(props) {
    super(props);
    this.state = { imageFile: null, imageSrc: null };
  }

  render() {
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item lg={12}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                type="file"
                onChange={this.props.handlePictureChange}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  startIcon={<PhotoCamera />}
                >
                  Upload
                </Button>
              </label>
            </Grid>
            <Grid item lg={12}>
              <img
                src={
                  this.props.user.imageSrc !== null
                    ? this.props.user.imageSrc
                    : defaultuser
                }
                alt="userPicture"
                width="280px"
                height="280px"
              />
            </Grid>
          </Grid>{" "}
          <div
            style={{
              display: "flex",
              marginTop: 50,
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              color="default"
              onClick={this.props.handleBack}
              style={{ marginRight: 10 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              //onClick={isValid ? handleNext : null}
              onClick={this.props.handleNext}
            >
              Next
            </Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
