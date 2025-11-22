import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import './About.css';

import profile from '../../assets/profile.png';

const MainContainer = styled(Container)(({ theme }) => ({
  maxWidth: '100vw !important',
  paddingLeft: '0 !important',
  marginTop: theme.spacing(4),
  marginBottom: "auto",
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(3),
  },
  [theme.breakpoints.down('xs')]: {
    marginTop: theme.spacing(2),
  },
}));

export const About = () => {
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}, a multidisciplinary 
                  designer & developer. I'm always down for something new and challenging!
                  I'm here to help you create beautifully formatted websites. 
                  My projects mostly includes web development.`;

  return (
    <section id="about">
      <MainContainer component="main" maxWidth={false}>
        <div className="about">
          <div 
            className="_img"
            style={{ 
              backgroundImage: `url(${profile})`,
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="/contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
