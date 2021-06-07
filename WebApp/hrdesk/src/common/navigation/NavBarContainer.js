import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./NavBar";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userReducer.user,
    logout: ownProps.logout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const { dispatch } = dispatchProps;
  return {
    ...stateProps,
    ...dispatchProps,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(NavBar));
