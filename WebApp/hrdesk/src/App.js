import "./App.css";
import LoginContainer from "./common/components/Login/LoginContainer";
import HomeGeneral from "./common/components/Home/HomeGeneral";
import NavBar from "./common/navigation/NavBar";
import { Router, Route } from "react-router-dom";
import PrivateRoute from "./services/PrivateRoute";
import { createBrowserHistory } from "history";
import { isTokenValid } from "./services/authService";
import { makeStyles } from "@material-ui/core/styles";

const history = createBrowserHistory();
const isLoggedIn = isTokenValid();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router history={history}>
        {isLoggedIn && <NavBar />}
        <Route path="/login" component={LoginContainer} exact={true} />
        <PrivateRoute
          path="/"
          component={HomeGeneral}
          isLoggedIn={isLoggedIn}
        />
      </Router>
    </div>
  );
}

export default App;
