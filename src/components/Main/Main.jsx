import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import makeStyles from "./Main.styles";
import Form from "../Form/Form";
import List from "../List/List";
import { useTotalCalc } from "../../utils/totalcalc";
const Main = () => {
  const classes = makeStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance ${useTotalCalc("Income") - useTotalCalc("expense")}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5rem", marginTop: "20px" }}
        >
          {/* Info Card */}
          try Saying: Anything to enter data in the form
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
