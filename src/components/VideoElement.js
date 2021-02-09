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
import LinkIcon from "@material-ui/icons/LinkRounded";
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

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
  const handleClick = () => {
    setTimeout(() => {
      window.open(`http://www.bilibili.com/video/${prop.bvnum}`);
    }, 200);
  };
  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            className={classes.media}
            component="img"
            image={prop.src}
            title={prop.title}
          />
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              {prop.title}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ display: "flex", alignItems: "center" }}
            >
              <PlayCircleOutlineRoundedIcon fontSize="small" />
              {prop.click}
            </Typography>
            
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ListRoundedIcon fontSize="small" />
              {prop.videoreview}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ChatBubbleOutlineRoundedIcon fontSize="small" />
              {prop.review}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ display: "flex", alignItems: "center" }}
            >
              <LinkIcon fontSize="small" />
              {prop.bvnum}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export default VideoElement;
