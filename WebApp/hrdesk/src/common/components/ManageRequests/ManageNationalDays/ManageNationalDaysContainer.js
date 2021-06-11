import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as nationalDayActions from "../../../../redux/actions/nationalDayActions";
import ManageNationalDaysGeneral from "./ManageNationalDaysGeneral";

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
    onAddNationalDay: async (nationalDayModel) => {
      return await dispatch(
        nationalDayActions.addNationalDay(nationalDayModel)
      );
    },
    onGetNationalDays: async () => {
      return await dispatch(nationalDayActions.getAllNationalDays());
    },
    onDeleteNationalDay: async (nationalDayId) => {
      return await dispatch(
        nationalDayActions.deleteNationalDay(nationalDayId)
      );
    },
    onUpdateNationalDay: async (nationalDayModel) => {
      return await dispatch(
        nationalDayActions.updateNationalDay(nationalDayModel)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(ManageNationalDaysGeneral));
