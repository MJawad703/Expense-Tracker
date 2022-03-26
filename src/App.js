import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import useStyles from "./app.style";
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} spacing={1}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} spacing={1}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} spacing={1}>
          <Details title="expense" />
        </Grid>
      </Grid>

      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
