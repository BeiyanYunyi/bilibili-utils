import { bv2av, av2bv } from "../utils/bv-av";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import axios from "axios";
import VideoElement from "../components/VideoElement";
import React, { useState } from "react";

const ListTitles = ({ prop, classes }) => {
  if (prop.length === 0) {
    return "";
  }
  return (
    <Container style={{ maxWidth: "100%" }}>
      <Typography variant="text" style={{ color: "#8A8A8A" }}>
        推荐视频列表
      </Typography>
      <Grid container spacing={2}>
        {prop.map((n) => {
          const corscover = `https://bund.penclub.club/?${n.cover}`;
          const bvnum = av2bv(n.aid);
          return (
            <VideoElement
              key={n.aid}
              bvnum={bvnum}
              src={corscover}
              title={n.title}
              className={classes.videoelement}
              click={n.click}
              review={n.review}
              videoreview={n.video_review}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

const BiliUtils = ({ theme, classes }) => {
  const [ppp, setppp] = useState([]);
  const [livebvNumber, setlivebvNumber] = useState("BV1uX4y1N7LS");
  const handleBVChange = (event) => {
    setlivebvNumber(event.target.value);
  };

  const handleGetButtonClick = (event) => {
    event.preventDefault();
    const av = bv2av(livebvNumber);
    const urltoget = `https://bund.penclub.club/?http://api.bilibili.cn/author_recommend?aid=${av}`;
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
          style={{ marginLeft: theme.spacing(1), height: "40px" }}
        >
          <KeyboardArrowRight />
          获取
        </Button>
      </Grid>
      <ListTitles prop={ppp} classes={classes} />
    </Grid>
  );
};
export default BiliUtils;
