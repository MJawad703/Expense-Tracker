import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./details.styles";
import useTransactions from "../../useTransaction";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <div>
      <Card className={title === "Income" ? classes.income : classes.expense}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          {chartData.datasets[0].data.length > 0 ? (
            <Doughnut data={chartData} />
          ) : (
            <span>Please enter some {title} data to see Graphs</span>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
