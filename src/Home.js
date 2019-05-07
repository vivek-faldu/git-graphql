import React, { Component } from "react";
import "styled-components/macro";
import SideBar from "./SideBar";
import { Grid, Paper } from "@material-ui/core";
import DataComponent from "./DataComponent";
import "styled-components/macro";

export default class Home extends Component {
  render() {
    return (
      <>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={1}>
            <SideBar />
          </Grid>

          <Grid item xs={11}>
            <Paper>
              <DataComponent />
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}
