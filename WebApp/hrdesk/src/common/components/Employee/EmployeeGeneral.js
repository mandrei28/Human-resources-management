import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container, CssBaseline } from "@material-ui/core";
import { styles } from "./EmployeeStyles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import FirstStep from "./UIComponents/FirstStep/FirstStep";
import SecondStep from "./UIComponents/SecondStep/SecondStep";
import ThirdStep from "./UIComponents/ThirdStep/ThirdStep";

const labels = ["Personal Data", "Company Data", "Permissions"];

class EmployeeGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNew: true,
      step: 0,
      user: {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        countryOfBirth: "",
        phone: "",
        address: "",
        dateOfBirth: new Date(),
        cnp: "",
        team: "",
        function: "",
        office: "",
        password: "",
        numberOfDaysoff: 0,
        salary: 0,
        dateOfEmployment: new Date(),
        workEmail: "",
        left: [1, 2],
        right: [3, 4],
      },
    };
  }
  componentDidMount() {
    console.info(this.props);
    if (this.props.match.params.id === "new") {
      this.setState({ isNew: true });
    } else {
      this.setState({ isNew: false, id: this.props.match.params.id });
    }
  }

  handleFieldChange = async (event, field) => {
    debugger;
    await this.setState((prevState) => {
      const { user } = prevState;
      user[field] = event.target.value;
      return { user };
    });
  };

  handlePermissionChange = async (left, right) => {
    debugger;
    debugger;
    await this.setState((prevState) => {
      const { user } = prevState;
      user.left = left;
      user.right = right;
      return { user };
    });
    console.info(this.state);
  };

  handleDayoffDateFieldChange = (value, field) => {
    this.setState((prevState) => {
      const { user } = prevState;
      user[field] = value;
      return { user };
    });
  };

  handleNext = () => this.setState({ step: this.state.step + 1 });
  handleBack = () => this.setState({ step: this.state.step - 1 });

  handleSteps = (step) => {
    debugger;
    switch (step) {
      case 0:
        return (
          <FirstStep
            handleNext={this.handleNext}
            handleChange={this.handleFieldChange}
            handleDateChange={this.handleDayoffDateFieldChange}
            user={this.state.user}
            // formErrors={formErrors}
          />
        );
      case 1:
        return (
          <SecondStep
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            handleChange={this.handleFieldChange}
            handleDateChange={this.handleDayoffDateFieldChange}
            user={this.state.user}
            //formErrors={formErrors}
          />
        );
      case 2:
        return (
          <ThirdStep
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            handleChange={this.handlePermissionChange}
            user={this.state.user}
          />
        );
      default:
        break;
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Stepper
              activeStep={this.state.step}
              style={{ margin: "30px 0 15px" }}
              alternativeLabel
            >
              {labels.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {this.handleSteps(this.state.step)}
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(EmployeeGeneral)
);
