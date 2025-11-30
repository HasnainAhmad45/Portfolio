import React, { useRef } from "react";
import { Container, Typography, TextField, Box, Link } from "@mui/material"; // added Box and Link
import { makeStyles } from "@mui/styles";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
  contactInfo: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'black', // default color
    fontWeight: 500,
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#ec704c', // color on hover
      transform: 'scale(1.05)', // slight zoom
    },
  },
}));


export const Contact = () => {
  const classes = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7j0x1nu', 'template_5t5ijjp', form.current, 'Q8AEn5yTXvHvPogIu')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have sent an email!',
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="name"
                className={classes.formfield}
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                className={classes.formfield}
              />
              <TextField
                id="outlined-message-input"
                label="Message"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                className={classes.formfield}
              />
              <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component='span'> Send Message</Typography>
              </button>
            </form>
          </div>
          <Box className={classes.contactInfo}>
            <Link
              href="mailto:hasnainahmad3453@gmail.com"
              target="_blank"
              rel="noopener"
              className={classes.link}
            >
              📧 hasnainahmad3453@gmail.com
            </Link>
            <Link
              href="https://www.linkedin.com/in/hasnain-ahmad-52a370281/"
              target="_blank"
              rel="noopener"
              className={classes.link}
            >
              🔗 LinkedIn
            </Link>
          </Box>

        </div>
      </Container>
    </section>
  );
};
