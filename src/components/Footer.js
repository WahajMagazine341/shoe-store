import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const Footer = () => {
    return(

    <Grid
    container
    spacing={0}
    style={{ marginTop: "2%", marginBottom:"2%" }}
    alignItems="left"
    justify="left"
  >
      <Grid item xs={12} md={4}>
          <Typography variant="caption">@Shoe store cc 2021 all rights reserved.</Typography>
      </Grid>

  </Grid>
    )
};