import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FaxIcon from "@mui/icons-material/Fax";
import "./style/Contact.css";

function ContactPage() {
  return (
    <>
      <Container
        className="main-contact"
        maxWidth="xxl"
        sx={{
          textAlign: "center",
          paddingTop: "5rem",
          height: "85vh",
        }}
      >
        <Typography
          className="header-title"
          gutterBottom
          variant="h3"
          component="div"
          fontWeight="600"
          color="#357a38"
          sx={{ marginTop: "5rem" }}
        >
          Contact Our Main Office
          <Typography
            className="sub-title"
            variant="body2"
            color="#357a38"
            fontSize={20}
            fontWeight={400}
            sx={{ marginTop: "2rem" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Obcaecati dolorem ad facere nemo, voluptatum, beatae aliquam error
            accusamus cupiditate rerum quam voluptas. <br /> Omnis at esse
            adipisci, assumenda culpa placeat provident!
          </Typography>
        </Typography>

        <Container
          className="office-contact"
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10rem",
            paddingBottom: "5rem",
          }}
        >
          <Card
            className="location-card"
            sx={{
              width: "15%",
              padding: "1rem",
              height: "20vh",
              boxShadow: "-4px 5px",
              borderRadius: "20px",
            }}
          >
            <PlaceIcon
              className="placeIcon"
              sx={{
                textAlign: "center",
                color: "#000000",
                fontSize: "80px",
                fontFamily: "mono",
              }}
            >
              {" "}
            </PlaceIcon>
            <Typography
              className="about-maintag"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "#000000",
                fontFamily: "mono",
              }}
            >
              <h3>Our Main Office Location</h3>
            </Typography>
            <Typography
              className="about-maintag"
              variant="h1"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "text.secondary",
                fontSize: "15px",
                fontFamily: "mono",
              }}
            >
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h3>
            </Typography>
          </Card>
          <Card
            className="phone-card"
            sx={{
              width: "15%",
              padding: "1rem",
              height: "20vh",
              boxShadow: "-4px 5px",
              borderRadius: "20px",
            }}
          >
            <PhoneIcon
              className="phoneIcon"
              sx={{
                textAlign: "center",
                color: "#000000",
                fontSize: "80px",
                fontFamily: "mono",
                fontWeight: "500",
              }}
            >
              {" "}
            </PhoneIcon>
            <Typography
              className="about-maintag"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "#000000",
                fontSize: "15px",
                fontFamily: "mono",
              }}
            >
              <h3>Phone Number</h3>
            </Typography>
            <Typography
              className="about-maintag"
              variant="h1"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "text.secondary",
                fontSize: "15px",
                fontFamily: "mono",
              }}
            >
              <h3>+63-xxx-xxx-xxx </h3>
            </Typography>
          </Card>
          <Card
            className="fax-card"
            sx={{
              width: "15%",
              padding: "1rem",
              height: "20vh",
              boxShadow: "-4px 5px",
              borderRadius: "20px",
            }}
          >
            <FaxIcon
              className="faxIcon"
              sx={{
                textAlign: "center",
                color: "#000000",
                fontSize: "80px",
                fontFamily: "mono",
              }}
            >
              {" "}
            </FaxIcon>
            <Typography
              className="about-maintag"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "#000000",
                fontSize: "15px",
                fontFamily: "mono",
              }}
            >
              <h3>Fax</h3>
            </Typography>
            <Typography
              className="about-maintag"
              variant="h1"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "text.secondary",
                fontSize: "15px",
                fontFamily: "mono",
              }}
            >
              {" "}
              <h3>+63-xxx-xxx-xxx</h3>
            </Typography>
          </Card>
          <Card
            className="email-card"
            sx={{
              width: "15%",
              padding: "1rem",
              height: "20vh",
              boxShadow: "-4px 5px",
              borderRadius: "20px",
            }}
          >
            <EmailIcon
              className="emailIcon"
              sx={{
                textAlign: "center",
                color: "#000000",
                fontSize: "80px",
                fontFamily: "mono",
              }}
            >
              {" "}
            </EmailIcon>
            <Typography
              className="about-maintag"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "#000000",
                fontSize: "15px",
                fontFamily: "mono",
              }}
            >
              <h3>Email</h3>
            </Typography>
            <Typography
              className="about-maintag"
              variant="h1"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "text.secondary",
                fontSize: "15px",
                fontFamily: "mono",
              }}
            >
              {" "}
              <h3>LoremIpsum@gmail.com</h3>
            </Typography>
          </Card>
        </Container>
      </Container>
    </>
  );
}

export default ContactPage;
