import { TextField, Grid, Button } from "@material-ui/core";
import React, { useState } from "react";
import { KeyboardArrowRight } from "@material-ui/icons";

const CFTest = ({ theme, classes }) => {
  const [numberofIP, setnumberofIP] = useState(1000);
  const handleNumberChange = (event) => {
    setnumberofIP(Number(event.target.value));
  };

  const handleGetButtonClick = (event) => {
    event.preventDefault();
    console.log(numberofIP);
  };

  return (
    <>
      <Grid container>
        <Grid item style={{ margin: theme.spacing(1) }}>
          <TextField
            variant="outlined"
            size="small"
            onChange={handleNumberChange}
            label="测试节点数"
            placeholder="1000"
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
      </Grid>
    </>
  );
};
export default CFTest;
