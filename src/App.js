import React from "react";
import { ThemeProvider } from "@material-ui/core";
import SideDrawer from "./components/TopBar";
import useStyles from "./style/style";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, teal } from "@material-ui/core/colors";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BiliUtils from "./routes/Bili-utils";
import HomePage from "./routes/HomePage";
import CFTest from "./routes/CFTest";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: blue,
  },
});

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router initialEntries={["/"]} initialIndex={0}>
        <SideDrawer classes={classes} open={open} setOpen={setOpen} />
        <div className={classes.drawerHeader} />
        <Switch>
          <Route path="/bili-utils">
            <BiliUtils theme={theme} classes={classes} />
          </Route>
          <Route path="/cftest">
            <CFTest theme={theme} classes={classes} />
          </Route>
          <Route path="/">
            <HomePage theme={theme} classes={classes} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
