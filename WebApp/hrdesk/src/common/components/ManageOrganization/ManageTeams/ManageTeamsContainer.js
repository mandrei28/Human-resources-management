import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as teamActions from "../../../../redux/actions/teamActions";
import ManageTeamsGeneral from "./ManageTeamsGeneral";

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
    onAddTeam: async (teamModel) => {
      return await dispatch(teamActions.addTeam(teamModel));
    },
    onGetTeams: async () => {
      return await dispatch(teamActions.getAllTeams());
    },
    onDeleteTeam: async (teamId) => {
      return await dispatch(teamActions.deleteTeam(teamId));
    },
    onUpdateTeam: async (teamModel) => {
      return await dispatch(teamActions.updateTeam(teamModel));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(withRouter(ManageTeamsGeneral));
