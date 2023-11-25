import { Typography } from "@mui/material";
import React from "react";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./style/Explored.css";

function ExploredPage() {
  return (
    <>
      <div className="main-container">
        <Typography
          className="featured-properties"
          sx={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: "mono",
          }}
          variant="h3"
          gutterBottom
          color="#357a38
        "
        >
          <h1>FEATURED PROPERTIES</h1>
          <Typography
            className="find-new"
            sx={{
              textAlign: "center",
              fontSize: 25,
              fontFamily: "mono",
            }}
            variant="h3"
            gutterBottom
            color="#357a38
        "
          >
            <p>Find new & featured property located in your city</p>
          </Typography>
        </Typography>
        <Container maxWidth="xxl" className="explore-container">
          <Container
            maxWidth="xl"
            className="list-card"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3rem",
              paddingBottom: "2rem",
            }}
          >
            <Card className="Model-1" sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="../../../src/assets/Image/housemodel1.png"
                  alt="Rosewood Retreat image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <h4>Overview: House Model #1 - Rosewood Retreat </h4>
                    "Rosewood Retreat" is an elegant and evocative name for a
                    property, suggesting a place of refinement, natural beauty,
                    and relaxation. The combination of "Rosewood" and "Retreat"
                    conjures images of a luxurious and tranquil environment,
                    perhaps surrounded by nature or offering a peaceful escape
                    from the hustle and bustle of everyday life.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className="Model-2" sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="../../../src/assets/Image/housemodel2.png"
                  alt="Harborview Haven image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <h4>Overview: House Model #2 - Harborview Haven </h4>{" "}
                    "Harborview Haven" is a charming and inviting name for a
                    property, suggesting a place of comfort and scenic beauty.
                    The combination of "Harborview" and "Haven" evokes images of
                    a peaceful sanctuary with picturesque views, perhaps
                    situated near a harbor or waterfront.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className="Model-3" sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="../../../src/assets/Image/housemodel3.png"
                  alt=" Moonlight Meadows image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <h4>Overview: House Model #3 - Moonlight Meadows </h4>{" "}
                    "Moonlight Meadows" is a poetic and enchanting name for a
                    property, suggesting a serene and picturesque setting under
                    the moon's gentle glow. This name conjures imagery of open
                    spaces, natural beauty, and a tranquil atmosphere.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Container>
          <Container
            maxWidth="xl"
            className="list-card"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
              paddingBottom: "2rem",
            }}
          >
            <Card className="Model-4" sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="../../../src/assets/Image/housemodel4.png"
                  alt="Serene Haven image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <h4>Overview: House Model #4 - Serene Haven </h4>
                    "Serene Haven" is a calming and elegant name for a property,
                    suggesting a tranquil and peaceful retreat. The combination
                    of "Serene" and "Haven" creates an image of a place that
                    offers solace, relaxation, and a sense of sanctuary.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className="Model-5" sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="../../../src/assets/Image/housemodel5.png"
                  alt="Radiant Meadows image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <h4>Overview: House Model #5 - Radiant Meadows </h4>{" "}
                    "Harmony Heights" is a wonderful and evocative name for a
                    house model. It conveys a sense of peace, balance, and
                    elevation. This name suggests a residence that offers a
                    serene and elevated living experience. Whether it's perched
                    on a hill, surrounded by nature, or designed with a focus on
                    balance and well-being, the name "Harmony Heights" creates
                    positive and inviting imagery.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className="Model-6" sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="../../../src/assets/Image/housemodel6.png"
                  alt=" Royal Crest Estates image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <h4>Overview: House Model #6 - Royal Crest Estates </h4>{" "}
                    "Royal Crest Estates" is a regal and sophisticated name for
                    a property, suggesting a place of elegance and grandeur. The
                    combination of "Royal" and "Crest" evokes images of a
                    distinguished and prestigious community with a strong sense
                    of heritage.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default ExploredPage;
