import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Typography,
  Drawer,
  List,
  Toolbar,
  AppBar,
  IconButton,
  Divider,
} from "@material-ui/core";
import {
  People,
  Dashboard,
  ChevronLeft,
  Menu,
  Home,
  WorkOutline,
  CalendarToday,
  Equalizer,
  HowToReg,
  Schedule,
  Comment,
} from "@material-ui/icons";
import { styles } from "./NavBarStyles";

function Copyright(props) {
  return (
    <Box className={props.styles.copyright}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        {"HRDesk "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selected: "Dashboard",
    };
    this.itemsList = [
      {
        text: "Dashboard",
        icon: <Dashboard />,
        onClick: () => {
          this.setState({ selected: "Dashboard" });
          props.history.push("/");
        },
      },
      {
        text: "Leave requests",
        icon: <Home />,
        onClick: () => {
          this.setState({ selected: "Leave requests" });
          props.history.push("/leaverequests");
        },
      },
      {
        text: "Daysoff requests",
        icon: <WorkOutline />,
        onClick: () => {
          this.setState({ selected: "Daysoff requests" });
          props.history.push("/daysoff");
        },
      },
      {
        text: "Reports",
        icon: <Equalizer />,
        onClick: () => {
          this.setState({ selected: "Reports" });
          props.history.push("/reports");
        },
      },
      {
        text: "Booking",
        icon: <CalendarToday />,
        onClick: () => {
          this.setState({ selected: "Booking" });
          props.history.push("/booking");
        },
      },
      {
        text: "Team",
        icon: <People />,
        onClick: () => {
          this.setState({ selected: "Team" });
          props.history.push("/team");
        },
      },
    ];
    this.adminItemsList = [
      {
        text: "Manage employees",
        icon: <HowToReg />,
        onClick: () => {
          this.setState({ selected: "Manage employees" });
          props.history.push("/employees");
        },
      },
      {
        text: "Create pool",
        icon: <Comment />,
        onClick: () => {
          this.setState({ selected: "Create pool" });
          props.history.push("/pool");
        },
      },
      {
        text: "Book room",
        icon: <Schedule />,
        onClick: () => {
          this.setState({ selected: "Book room" });
          props.history.push("/book");
        },
      },
    ];
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={clsx(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden
              )}
            >
              <Menu />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {this.state.selected}
            </Typography>
            <IconButton color="inherit">
              {/* <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            ),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
          <List>
            {this.itemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem
                  button
                  key={text}
                  onClick={onClick}
                  selected={this.state.selected === text}
                >
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <List>
            <ListSubheader inset>Admin</ListSubheader>
            {this.adminItemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem
                  button
                  key={text}
                  onClick={onClick}
                  selected={this.state.selected === text}
                >
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
          {this.state.open && <Copyright styles={classes} />}
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(NavBar));
