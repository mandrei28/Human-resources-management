import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as userActions from "../../../redux/actions/userActions";
import TeamGeneral from "./TeamGeneral";

const mapStateToProps = (state, ownProps) => {
  return {};
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
    onGetUsers: async () => {
      return await dispatch(userActions.getUsers());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(TeamGeneral));
