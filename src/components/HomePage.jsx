import React from "react";
import { Autocomplete, Container } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { createFilterOptions } from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import "./style/Home.css";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.Location,
});
const chooseLocation = [
  { Location: "Cavite" },
  { Location: "Laguna" },
  { Location: "Batangas" },
  { Location: "Rizal" },
  { Location: "Quezon" },
];
const chooseHouselot = [
  { list: "Rosewood Retreat" },
  { list: "Harborview Haven" },
  { list: "Moonlight Meadows" },
  { list: "Serene Haven" },
  { list: "Radiant Meadows" },
  { list: "Royal Crest Estates" },
];
const choosePrice = [
  { Price: "1,000,000 - 2,000,000" },
  { Price: "3,000,000 - 4,000,000" },
  { Price: "5,000,000 - 6,000,000" },
  { Price: "7,000,000 - 8,000,000" },
  { Price: "9,000,000 - 10,000,000" },
];

function HomePage() {
  return (
    <>
      <div
        className="hero-container"
        style={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          className="hero-title "
          style={{
            fontFamily: "sans-serif",
            // fontSize: "30px",
            color: "#ffffff",
            paddingTop: "5rem",
          }}
        >
          Your Dream Home Awaits <br /> Where Elegance Meets Excellence
        </Typography>
        <Typography
          variant="p"
          className="hero-subtitle"
          style={{
            fontFamily: "sans-serif",
            // fontSize: "20px",
            color: "#ffffff",
          }}
        >
          The real estate developer with the widest reach in the country,
          serving Filipinos <br /> for more than four decades – these numbers
          tell the story of our passion and success …
        </Typography>

        <div
          className="hero-button"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2%",
            paddingTop: "3rem",
          }}
        >
          <Button
            className="button-inquire"
            variant="contained"
            size="large"
            color="success"
          >
            Inquire Now
          </Button>
          <Button
            className="button-call"
            variant="contained"
            size="large"
            color="success"
          >
            Call Now
          </Button>
        </div>
        <Container
          maxWidth="xl"
          className="inputcard-container"
          sx={{ marginTop: "2rem" }}
        >
          <Card
            className="input-card"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "4%",
              padding: "3rem",
              marginTop: "10rem",
            }}
          >
            <Autocomplete
              className="Choose-Location"
              id="filter-demo"
              options={chooseLocation}
              getOptionLabel={(option) => option.Location}
              filterOptions={filterOptions}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  className="input-textfield"
                  {...params}
                  label="Choose Location"
                />
              )}
            />

            <Autocomplete
              className="house-lot"
              id="filter-demo"
              options={chooseHouselot}
              getOptionLabel={(option) => option.list}
              filterOptions={filterOptions}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  className="input-textfield"
                  {...params}
                  label="House Model"
                />
              )}
            />

            <Autocomplete
              className="choose-price"
              id="filter-demo"
              options={choosePrice}
              getOptionLabel={(option) => option.Price}
              filterOptions={filterOptions}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  className="input-textfield"
                  {...params}
                  label="Choose Price"
                />
              )}
            />

            <Button
              className="button-search"
              variant="contained"
              size="medium"
              color="success"
            >
              Search
            </Button>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
