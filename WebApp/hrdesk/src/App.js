import "./App.css";
import LoginContainer from "./common/components/Login/LoginContainer";
import HomeGeneral from "./common/components/Home/HomeGeneral";
import DaysoffGeneral from "./common/components/Daysoff/DaysoffGeneral";
import NavBar from "./common/navigation/NavBar";
import { Route } from "react-router-dom";
import PrivateRoute from "./services/PrivateRoute";
import { isTokenValid } from "./services/authService";
import { makeStyles } from "@material-ui/core/styles";
import LeaveRequestGeneral from "./common/components/LeaveRequest/LeaveRequestGeneral";
import TeamGeneral from "./common/components/Team/TeamGeneral";
import BookGeneral from "./common/components/Book/BookGeneral";

const isLoggedIn = isTokenValid();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isLoggedIn && <NavBar />}
      <Route path="/login" component={LoginContainer} exact={true} />
      <PrivateRoute
        exact
        path="/"
        component={HomeGeneral}
        isLoggedIn={isLoggedIn}
      />
      <PrivateRoute
        exact
        path="/daysoff"
        component={DaysoffGeneral}
        isLoggedIn={isLoggedIn}
      />
      <PrivateRoute
        exact
        path="/leaverequest"
        component={LeaveRequestGeneral}
        isLoggedIn={isLoggedIn}
      />
      <PrivateRoute
        exact
        path="/team"
        component={TeamGeneral}
        isLoggedIn={isLoggedIn}
      />
      <PrivateRoute
        exact
        path="/book"
        component={BookGeneral}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default App;
