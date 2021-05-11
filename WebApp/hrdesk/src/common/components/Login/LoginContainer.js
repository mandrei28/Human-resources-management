import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as userActions from "../../../redux/actions/userActions";
import LoginGeneral from "./LoginGeneral";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    // onLoadUsersComplete: (users) => {
    //   dispatch(getUsersSuccess(users));
    // },
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const { dispatch } = dispatchProps;
  return {
    ...stateProps,
    ...dispatchProps,
    onLogin: (user) => {
      return dispatch(userActions.login(user));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(LoginGeneral));
