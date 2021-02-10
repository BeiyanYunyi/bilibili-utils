import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import HomeIcon from "@material-ui/icons/Home";
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import clsx from "clsx";
import { Route, Link as RouterLink, Switch } from "react-router-dom";

const ListItemLink = (props) => {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

const SideDrawer = ({ classes, open, setOpen }) => {
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Switch>
            <Route path="/bili-utils">
              <Typography variant="h6">获取bilibili推荐视频</Typography>
            </Route>
            <Route path="/cftest">
              <Typography variant="h6">Cloudflare节点测速</Typography>
            </Route>
            <Route path="/">
              <Typography variant="h6">前端佬的综合工具箱</Typography>
            </Route>
          </Switch>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItemLink to="/" primary="首页" icon={<HomeIcon />} />
          <ListItemLink
            to="/bili-utils"
            primary="获取推荐视频"
            icon={<LiveTvIcon />}
          />
          <ListItemLink
          to="/cftest"
          primary="节点测速"
          icon={<CloudDoneIcon />}
        />
        </List>
      </Drawer>
    </>
  );
};
export default SideDrawer;
