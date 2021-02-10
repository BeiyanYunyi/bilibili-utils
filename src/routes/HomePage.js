import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
const HomePage = () => {
  return (
    <Grid container>
      <Container style={{ maxWidth: "100%" }}>
        <Grid item>
          <Typography variant="h2" gutterBottom>
            简单的标题
          </Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom>顾名思义，前端佬的一点工具箱</Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom>包含功能：</Typography>
        </Grid>
        <ul>
          <li>
            <Grid item>
              <Typography gutterBottom>获取bilibili推荐视频</Typography>
            </Grid>
          </li>
          <li>
            <Grid item>
              <Typography gutterBottom>cloudflare节点测速</Typography>
            </Grid>
          </li>
        </ul>
      </Container>
    </Grid>
  );
};
export default HomePage;
