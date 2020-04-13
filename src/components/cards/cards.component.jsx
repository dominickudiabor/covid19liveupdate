import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import "./cards.styles.scss";

const Cards = ({ data }) => {
  if (!data) {
    return "Loading ...";
  }
  const realData = Object.entries(data);


  const description = (key) => {
    switch (key) {
      case 'confirmed': return 'Number of active cases of COVID-19'
        case 'recovered' : return 'Number of recoveries from COVID-19'
      default: return 'Number of deaths caused by COVID-19'
     
    }
  }

  return (
    <div className="card-container">
      <Grid container spacing={3} justify="center">
        {realData
          .filter((item, idx) => idx < 3)
          .map((item, idx) => {
            return (
              <Grid
                item
                component={Card}
                xs={12}
                md={3}
                key={idx}
                className={cx("card", `${item[0]}`)}
              >
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {item[0].toUpperCase()}
                  </Typography>
                  <Typography variant="h5">
                    <CountUp
                      start={0}
                      end={item[1].value}
                      duration={2.5}
                      separator=","
                    />
                  </Typography>
                  <Typography color="textSecondary">
                    {new Date(data.lastUpdate).toDateString()}
                  </Typography>
                  <Typography variant="body2">
                    {description(item[0])}
                  </Typography>
                </CardContent>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Cards;
