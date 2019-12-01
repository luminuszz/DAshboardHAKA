/* eslint-disable no-script-url */
import React, { useState, useEffect, useCallback } from "react";
import { PieChart, Pie } from "recharts";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../Title/Title";
import * as dados from "./dados";
import { textAlign } from "@material-ui/system";
const useStyles = makeStyles({
  depositContext: {
    flex: 1
  },
  div: {
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingTop: 8,
    paddingBottom: 5
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    display: "flex",
    marginLeft: "50px"
  }
});

export default function Deposits(props) {
  const [key, setkey] = useState("");
  const [array, setArray] = useState([]);
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Title className={classes.title}>Ultimo acesso</Title>
      <PieChart width={730} height={250}>
        <Pie
          data={dados.data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={dados.data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
}
