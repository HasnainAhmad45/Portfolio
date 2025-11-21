import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";

const MainContainer = styled(Container)(({ theme }) => ({
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  boxSizing: "border-box",
  [theme.breakpoints.down('sm')]: {
    minHeight: "50vh",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  [theme.breakpoints.down('xs')]: {
    minHeight: "45vh",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const HeadingWrapper = styled('div')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: 600,
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('md')]: {
    maxWidth: 500,
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 400,
    padding: theme.spacing(0, 1.5),
  },
  [theme.breakpoints.down('xs')]: {
    maxWidth: "90%",
    padding: theme.spacing(0, 1),
  },
}));

const NameTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.65rem",
  fontWeight: 500,
  textAlign: "center",
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: "1.15rem",
  },
}));

const JobsTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 700,
  fontSize: "4rem",
  lineHeight: 1.2,
  [theme.breakpoints.down('lg')]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down('md')]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: "1.8rem",
    lineHeight: 1.1,
  },
  '@media (max-width: 360px)': {
    fontSize: "1.4rem",
  },
}));

export const Content = () => {
  return (
    <MainContainer component="main" maxWidth="md">
      <HeadingWrapper>
        <NameTypography variant="h5" component="h2">
          <TextDecrypt text={`${FirstName} ${LastName}`} />
        </NameTypography>
        <JobsTypography variant="h1" component="h1">
          <TextDecrypt
            text={`${Resume.basics?.job1 || "Software Engineer"} + `}
          />
          <TextDecrypt text={`${Resume.basics?.job2 || "Web Developer"}`} />
        </JobsTypography>
      </HeadingWrapper>
    </MainContainer>
  );
};
