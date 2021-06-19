import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import { styles } from "./EmployeeStyles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import FirstStep from "./UIComponents/FirstStep/FirstStep";
import SecondStep from "./UIComponents/SecondStep/SecondStep";
import ThirdStep from "./UIComponents/ThirdStep/ThirdStep";
import ForthStep from "./UIComponents/ForthStep/ForthStep";

const labels = ["Personal Data", "Company Data", "Picture", "Permissions"];

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
        teamId: null,
        functionId: null,
        officeId: null,
        password: "",
        numberOfDaysoff: 0,
        salary: 0,
        dateOfEmployment: new Date(),
        workEmail: "",
        permissions: [],
        imageFile: null,
        imageSrc: null,
      },
      allPermissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  }
  async componentDidMount() {
    const offices = await this.props.onGetOffices();
    const functions = await this.props.onGetFunctions();
    const teams = await this.props.onGetTeams();
    await this.setState({ offices, functions, teams });

    if (this.props.match.params.id === "new") {
      this.setState({ isNew: true });
    } else {
      const user = await this.props.onGetUser(this.props.match.params.id);
      await this.setState({
        isNew: false,
        id: this.props.match.params.id,
        user,
      });
      this.mapExistentUserPermissions(user.permissions);
    }
  }

  mapExistentUserPermissions = (permissions) => {
    this.setState((prevState) => {
      var { allPermissions } = prevState;
      permissions.forEach((permission) => {
        const permissionIndex = allPermissions.indexOf(permission);
        allPermissions.splice(permissionIndex, 1);
      });
      return { allPermissions };
    });
  };

  handleFieldChange = async (event, field) => {
    await this.setState((prevState) => {
      const { user } = prevState;
      user[field] = event.target.value;
      return { user };
    });
  };

  handlePermissionChange = async (left, right) => {
    await this.setState((prevState) => {
      const { user } = prevState;
      var { allPermissions } = prevState;
      allPermissions = left;
      user.permissions = right;
      return { user, allPermissions };
    });
    console.info(this.state);
  };

  handleDateFieldChange = (value, field) => {
    this.setState((prevState) => {
      const { user } = prevState;
      user[field] = value;
      return { user };
    });
  };

  handlePictureChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let imageFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        this.setState((prevState) => {
          const { user } = prevState;
          user.imageFile = imageFile;
          user.imageSrc = x.target.result;
          return { user };
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      this.setState((prevState) => {
        const { user } = prevState;
        user.imageFile = null;
        user.imageSrc = null;
        return { user };
      });
    }
  };

  removePicture = () => {
    this.setState((prevState) => {
      const { user } = prevState;
      user.imageFile = null;
      user.imageSrc = null;
      return { user };
    });
  };

  handleSubmit = async () => {
    if (this.state.isNew) {
      await this.props.onAddUser(this.state.user, this.props.history);
    } else {
      await this.props.onUpdateUser(this.state.user, this.props.history);
    }
  };

  handleNext = () => this.setState({ step: this.state.step + 1 });
  handleBack = () => this.setState({ step: this.state.step - 1 });

  handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <FirstStep
            handleNext={this.handleNext}
            handleChange={this.handleFieldChange}
            handleDateChange={this.handleDateFieldChange}
            user={this.state.user}
          />
        );
      case 1:
        return (
          <SecondStep
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            handleChange={this.handleFieldChange}
            handleDateChange={this.handleDateFieldChange}
            user={this.state.user}
            offices={this.state.offices}
            teams={this.state.teams}
            functions={this.state.functions}
            isNew={this.state.isNew}
          />
        );
      case 2:
        return (
          <ThirdStep
            handleBack={this.handleBack}
            handleNext={this.handleNext}
            handleChange={this.handlePermissionChange}
            handlePictureChange={this.handlePictureChange}
            removePicture={this.removePicture}
            user={this.state.user}
          />
        );
      case 3:
        return (
          <ForthStep
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            handleChange={this.handlePermissionChange}
            handleSubmit={this.handleSubmit}
            user={this.state.user}
            allPermissions={this.state.allPermissions}
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
