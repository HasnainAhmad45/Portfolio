import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    paddingTop: "40px",
    paddingBottom: "40px",
    boxSizing: "border-box",
    "@media (max-width: 440px)": {
      paddingTop: "16px",
      paddingBottom: "16px",
      minHeight: "50vh",
    },
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
    "@media (max-width: 440px)": {
      maxWidth: 340,
    },
  },
  name: {
    fontSize: "1.65rem",
    fontWeight: 500,
    "@media (max-width: 390px)": {
      fontSize: "1.15rem",
    },
  },
  jobs: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "4rem",
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
    },
    "@media (max-width: 440px)": {
      fontSize: "1.4rem",
      lineHeight: 1.2,
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography variant="h5" component="h2" className={classes.name}>
          <TextDecrypt text={`${FirstName} ${LastName}`} />
        </Typography>
        <Typography variant="h1" component="h1" className={classes.jobs}>
          <TextDecrypt
            text={`${Resume.basics?.job1 || "Software Engineer"} + `}
          />
          <TextDecrypt text={`${Resume.basics?.job2 || "Web Developer"}`} />
        </Typography>
      </div>
    </Container>
  );
};
