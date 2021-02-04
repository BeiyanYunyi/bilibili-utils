import React from "react";
import { bv2av, av2bv } from "./utils/bv-av";
import {
  Grid,
  TextField,
  Typography,
  makeStyles,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  ThemeProvider,
  Container,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, teal } from "@material-ui/core/colors";
import { KeyboardArrowRight } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import axios from "axios";
import { useState } from "react";
import VideoElement from "./components/VideoElement";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: blue,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "500px",
    height: "auto",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  videoelement: {
    width: "500px",
    height: "500px",
  },
}));

const ListTitles = ({ prop }) => {
  const classes = useStyles();
  if (prop.length === 0) {
    return "";
  }
  return (
    <Container>
      <Typography variant="text" style={{ color: "#8A8A8A" }}>
        推荐视频列表
      </Typography>
      <Grid container spacing={2}>
        {prop.map((n) => {
          const corscover = `http://192.168.50.92:8080/${n.cover}`;
          const bvnum = av2bv(n.aid);
          return (
            <VideoElement
              key={n.aid}
              bvnum={bvnum}
              src={corscover}
              title={n.title}
              className={classes.videoelement}
            />

            /*<GridList
              cellHeight={classes.gridList.height}
              className={classes.gridList}
            >
              <GridListTile key={n.aid}>
                <img src={corscover} alt={n.title} />
                <GridListTileBar title={n.title} subtitle={avnum} />
              </GridListTile>
            </GridList>*/
          );
        })}
      </Grid>
    </Container>
  );
};

const App = () => {
  const [ppp, setppp] = useState([]);
  const [livebvNumber, setlivebvNumber] = useState("BV1uX4y1N7LS");
  const classes = useStyles();

  const handleBVChange = (event) => {
    setlivebvNumber(event.target.value);
  };

  const handleGetButtonClick = (event) => {
    event.preventDefault();
    const av = bv2av(livebvNumber);
    const urltoget = `http://192.168.50.92:8080/http://api.bilibili.cn/author_recommend?aid=${av}`;
    axios
      .get(urltoget)
      .then((res) => {
        setppp([]);
        setppp(res.data.list);
      })
      .catch((error) => {
        alert(`${error}`);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">获取推荐视频</Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item style={{ margin: theme.spacing(1) }}>
          <TextField
            variant="outlined"
            size="small"
            label="BV号"
            placeholder="BV1uX4y1N7LS"
            onChange={handleBVChange}
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleGetButtonClick}
            style={{ marginLeft: theme.spacing(1) }}
          >
            <KeyboardArrowRight />
            获取
          </Button>
        </Grid>
        <Grid item>
          <ListTitles prop={ppp} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
