import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as userActions from "../../../../redux/actions/userActions";
import CompanyChartsGeneral from "./CompanyChartsGeneral";

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
    onGetAgeChart: async () => {
      return await dispatch(userActions.getAgeChart());
    },
    onGetFunctionChart: async () => {
      return await dispatch(userActions.getFunctionChart());
    },
    onGetCountryChart: async () => {
      return await dispatch(userActions.getCountryChart());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(CompanyChartsGeneral));
