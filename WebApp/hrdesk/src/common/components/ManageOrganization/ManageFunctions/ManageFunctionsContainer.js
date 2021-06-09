import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as functionActions from "../../../../redux/actions/functionActions";
import ManageFunctionsGeneral from "./ManageFunctionsGeneral";

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
    onAddFunction: async (functionModel) => {
      return await dispatch(functionActions.addFunction(functionModel));
    },
    onGetFunctions: async () => {
      return await dispatch(functionActions.getAllFunctions());
    },
    onDeleteFunction: async (functionId) => {
      return await dispatch(functionActions.deleteFunction(functionId));
    },
    onUpdateFunction: async (functionModel) => {
      return await dispatch(functionActions.updateFunction(functionModel));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(ManageFunctionsGeneral));
