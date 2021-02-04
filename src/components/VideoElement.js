import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    maxHeight: 250,
  },
});

const VideoElement = (prop) => {
  const classes = useStyles();
  const handleClick =() =>{
    setTimeout(() => {
      window.open(`http://www.bilibili.com/video/${prop.bvnum}`)
    }, 200);
  }
  console.log(prop.bvnum);
  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            className={classes.media}
            component="img"
            image={prop.src}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {prop.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export default VideoElement;
