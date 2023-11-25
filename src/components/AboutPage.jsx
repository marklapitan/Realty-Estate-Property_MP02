import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./style/About.css";

function AboutPage() {
  return (
    <>
      <Typography
        className="about-maintag"
        sx={{
          textAlign: "center",
          color: "#357a38",
          fontFamily: "sans-serif",
          marginTop: "5rem",
        }}
        gutterBottom
      >
        <h1>
          Excellence Beyond Walls: Crafting Prestigious Homes for Every Chapter
          of Your Life
        </h1>

        <p>
          At Prestige Estates, we have been a trusted name in the real estate
          industry for over 20 years, serving clients in Bay Lagun and beyond.{" "}
          <br />
          Our journey began with a simple yet profound mission: to help people
          find their perfect homes and investment properties <br /> while
          providing exceptional service and expert guidance throughout their
          real estate journey.
        </p>
      </Typography>
      <Container
        className="about-container"
        maxWidth="xl"
        sx={{ marginTop: "5rem" }}
      >
        <Container className="mission-card" maxWidth="xl">
          <Typography
            className="mission-typ1"
            sx={{
              textAlign: "center",
              fontSize: 50,
              color: "#000000",
            }}
          >
            Mission
            <Typography
              className="mission-typ2"
              sx={{
                fontSize: "22px",
                textAlign: "center",
                paddingBottom: "2rem",
              }}
              color="text.secondary"
            >
              Crafting Distinctive Homes, Nurturing Lasting Legacies <br />
            </Typography>
          </Typography>

          <Typography
            className="mission-dialog"
            sx={{
              fontSize: "22px",
              textAlign: "justify",
            }}
            color="text.secondary"
          >
            At Prestige Estates, our mission is to curate unparalleled living
            experiences that redefine the essence of home. We are dedicated to
            the meticulous craftsmanship, innovative design, and sustainable
            practices that distinguish our properties. Our commitment to
            excellence extends beyond the structures we build; it encompasses
            the communities we nurture. We endeavor to foster a sense of
            belonging, where residents thrive in environments that reflect
            prestige and leave a legacy of distinction for generations to come.
            Through integrity, innovation, and an unwavering dedication to
            quality, we aim to exceed expectations and set new standards in
            private home realty.
          </Typography>
        </Container>
        <Container
          className="vision-card"
          maxWidth="xl"
          sx={{ marginTop: "5rem" }}
        >
          {" "}
          <Typography
            className="vision-typ1"
            sx={{
              textAlign: "center",
              fontSize: 50,
              paddingBottom: "1rem",
              color: "#000000",
            }}
            gutterBottom
            variant="h3"
            component="div"
          >
            Vision
            <Typography
              className="vision-typ2"
              sx={{ fontSize: "22px", textAlign: "center" }}
              color="text.secondary"
            >
              Where Every Home Embodies Timeless Distinction
            </Typography>
          </Typography>
          <Typography
            className="mission-dialog"
            sx={{
              fontSize: "22px",
              textAlign: "justify",
              marginBottom: "1rem",
            }}
            color="text.secondary"
          >
            At Prestige Estates, our vision is to be the unequivocal
            standard-bearer of luxury living, crafting residences that transcend
            the ordinary. We aspire to create a world where each home is a
            testament to timeless distinction, seamlessly blending opulence,
            innovation, and environmental stewardship. Through our commitment to
            architectural brilliance and community integrity, we envision
            Prestige Estates as the epitome of sophistication, leaving an
            indelible mark on the landscapes we touch.
          </Typography>
        </Container>
        <hr />
      </Container>

      <Container
        className="history-container"
        maxWidth="xl"
        sx={{ marginTop: "5rem" }}
      >
        <Typography
          className="history-header"
          gutterBottom
          sx={{
            textAlign: "center",
            fontSize: 50,
            paddingBottom: "1rem",
            color: "#000000",
          }}
        >
          Our History
          <Typography
            className="history-tagline"
            gutterBottom
            sx={{ fontSize: "22px" }}
            color="text.secondary"
          >
            The Birth of Prestige Estates: A Tale of Vision and Distinction{" "}
          </Typography>
        </Typography>
        <CardContent
          sx={{
            textAlign: "justify",
          }}
        >
          <Typography
            className="history-dialog"
            sx={{ fontSize: "20px", marginBottom: "1rem" }}
            color="text.secondary"
          >
            In the bustling city of Eldoria, where dreams illuminated the
            skyline and ambition echoed through the streets, a visionary
            entrepreneur named Olivia Vanderbilt founded Prestige Estates in the
            year 1995. With a fervent belief in the transformative power of
            exceptional homes, Olivia set out to redefine the landscape of real
            estate. <br /> <br /> Olivia's journey began with an unwavering
            commitment to craftsmanship and a keen eye for distinctive
            architecture. Prestige Estates emerged as a beacon of sophistication
            in a sea of conventional properties. Olivia's ethos was clear – to
            create not just residences, but private sanctuaries where families
            could thrive amid luxury and distinction. <br /> <br /> In the late
            '90s, Prestige Estates gained acclaim for restoring historic
            landmarks, breathing new life into architectural treasures while
            preserving their storied pasts. This marked the company's first
            foray into the seamless integration of heritage and modernity,
            setting a precedent for the unique character that would define
            Prestige Estates properties. <br /> <br /> As the new millennium
            unfolded, Prestige Estates evolved into a global brand, with
            projects spanning from metropolitan skylines to serene countryside
            retreats. The company's commitment to opulence remained unwavering,
            attracting discerning homeowners seeking not just houses, but
            legacies. <br /> <br /> Innovation became the cornerstone of
            Prestige Estates in the 21st century. The company embraced
            cutting-edge technology and sustainable practices, ensuring that
            each property not only met the highest standards of luxury but also
            reflected a commitment to the environment. Smart homes and
            eco-friendly designs became synonymous with Prestige Estates'
            forward-thinking approach. <br /> <br /> The leadership baton passed
            from Olivia to her successors, each generation contributing to the
            company's legacy. Prestige Estates Private Home Realty Property
            Company became more than a business; it became a symbol of
            distinction, where the name itself conveyed a promise of
            unparalleled quality and sophistication. <br /> <br /> Today,
            Prestige Estates stands as a testament to Olivia Vanderbilt's
            vision. The company's portfolio boasts a diverse array of
            properties, each bearing the signature touch of Prestige Estates'
            commitment to excellence. From penthouses overlooking cityscapes to
            sprawling estates in exclusive communities, every home is a chapter
            in the ongoing story of Prestige Estates. <br /> <br /> As the sun
            sets over Eldoria, it casts a golden glow on the legacy of Prestige
            Estates. The company remains at the forefront of private home
            realty, a pioneer in luxury living, and a guardian of a vision that
            continues to unfold with each meticulously crafted residence. In the
            world of Prestige Estates, every property is not just a house; it is
            an embodiment of a lifestyle marked by distinction, elegance, and
            the enduring pursuit of excellence.
          </Typography>
        </CardContent>
        <hr />
      </Container>

      <Container
        className="achievement-container"
        maxWidth="xl"
        sx={{ marginTop: "5rem" }}
      >
        <Typography
          className="achievement-headtag"
          gutterBottom
          variant="h3"
          component="div"
          sx={{
            textAlign: "center",
            fontSize: 50,
            color: "#000000",
          }}
        >
          ACHIEVEMENTS
        </Typography>

        <Typography
          className="achievement-tagline "
          sx={{
            fontSize: 20,
            textAlign: "center",
            paddingBottom: "5rem",
          }}
          color="text.secondary"
          gutterBottom
        >
          Prestige Estates Private Home Realty Property Company is honored with
          the "Prestige Excellence in Luxury Living Award" for its unwavering
          commitment to redefining the landscape of private home realty. This
          award recognizes the company's outstanding achievements in crafting
          residences that seamlessly blend opulence, innovation, and
          environmental stewardship.
        </Typography>

        <Typography
          className="key-achievement"
          sx={{
            marginTop: "1rem",
            fontSize: 20,
            textAlign: "start",
            color: "#000000",
          }}
          variant="subtitle2"
          gutterBottom
        >
          Key Achievements:
          <Typography
            className=""
            sx={{
              marginTop: "2%",
              fontSize: 20,
              textAlign: "start",
            }}
            variant="subtitle2"
            gutterBottom
          >
            <ol>
              <li>Architectural Brilliance:</li>
              <Typography
                className="keyachievement-tagline"
                sx={{
                  fontSize: 20,
                  justifyContent: "left",
                  textAlign: "justify",
                }}
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                Prestige Estates has consistently demonstrated a commitment to
                architectural excellence, creating residences that stand as
                testaments to timeless distinction and sophistication.
              </Typography>
              <li>Innovation in Design:</li>
              <Typography
                className="keyachievement-tagline"
                sx={{
                  fontSize: 20,
                  justifyContent: "left",
                  textAlign: "justify",
                }}
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                The company has been a pioneer in integrating cutting-edge
                technology and sustainable practices into its developments,
                setting new standards for innovation in luxury living.
              </Typography>
              <li>Community Integrity:</li>
              <Typography
                className="keyachievement-tagline"
                sx={{
                  fontSize: 20,
                  justifyContent: "left",
                  textAlign: "justify",
                }}
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                Prestige Estates has fostered a sense of community that goes
                beyond property lines. The company's commitment to community
                well-being, inclusivity, and shared values has elevated the
                living experience for its residents. environmental stewardship.
              </Typography>
              <li>Environmental Stewardship:</li>
              <Typography
                className="keyachievement-tagline"
                sx={{
                  fontSize: 20,
                  justifyContent: "left",
                  textAlign: "justify",
                }}
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                Prestige Estates has embraced a vision of sustainability,
                incorporating eco-friendly practices into its developments and
                contributing to the global effort toward responsible living.
              </Typography>
              <li>Legacy of Distinction:</li>
              <Typography
                className="keyachievement-tagline"
                sx={{
                  fontSize: 20,
                  justifyContent: "left",
                  textAlign: "justify",
                  marginBottom: "1rem",
                }}
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                {" "}
                Through its dedication to quality, integrity, and the enduring
                pursuit of excellence, Prestige Estates has created a legacy of
                distinction that transcends the ordinary, leaving an indelible
                mark on the landscapes it touches.
              </Typography>
            </ol>{" "}
          </Typography>
        </Typography>
      </Container>
      <Container
        className="award-container"
        maxWidth="xl"
        sx={{ marginTop: "5rem" }}
      >
        <hr />
        <Typography
          className="award-typo"
          gutterBottom
          sx={{
            fontSize: 50,
            textAlign: "center",
            color: "#000000",
          }}
        >
          Award
          <Typography
            className="award-subtitle"
            gutterBottom
            sx={{ fontSize: "22px" }}
            color="text.secondary"
          >
            These recognitions from awarding-giving institutions serve as the
            mark of our continued leadership in the real estate
            industry—Prestige Estate as a top-of-the-mind homebuilder in the
            country.
          </Typography>
        </Typography>
        <Container
          maxWidth="xl"
          className="award-img-container"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "3rem",
          }}
        >
          <Card
            className="award-card1"
            sx={{
              maxWidth: 200,
              boxShadow: "-2px -2px 2px 2px",
            }}
          >
            <CardMedia
              className="award-img"
              component="img"
              height="120"
              image="../../../src/assets/image/readers-digest-go-award.png"
              alt="award image"
            />
          </Card>
          <Card
            className="award-card2"
            sx={{
              maxWidth: 200,
              boxShadow: "-2px -2px 2px 2px",
            }}
          >
            <CardMedia
              className="award-img"
              component="img"
              height="120"
              image="../../../src/assets/image/qquilll-award.png"
              alt="award image"
            />
          </Card>
          <Card
            className="award-card3"
            sx={{ maxWidth: 200, boxShadow: "-2px -2px 2px 2px" }}
          >
            <CardMedia
              className="award-img"
              component="img"
              height="120"
              image="../../../src/assets/Image/philippine-property-awards.png"
              alt="award image"
            />
          </Card>
          <Card
            className="award-card4"
            sx={{ maxWidth: 200, boxShadow: "-2px -2px 2px 2px" }}
          >
            <CardMedia
              className="award-img"
              component="img"
              height="120"
              image="../../../src/assets/Image/fiabci-philippines-award.png"
              alt="award image"
            />
          </Card>
          <Card
            className="award-card5"
            sx={{ maxWidth: 200, boxShadow: "-2px -2px 2px 2px" }}
          >
            <CardMedia
              className="award-img"
              component="img"
              height="120"
              image="../../../src/assets/Image/carousell-property-awards.png"
              alt="award image"
            />
          </Card>
        </Container>
      </Container>

      <Container maxWidth="xxl" sx={{ backgroundColor: "#357a38" }}>
        <Container
          className="estate-number-con"
          maxWidth="xl"
          sx={{ marginTop: "5rem", padding: "1rem" }}
        >
          <Typography
            className="prestige-estate-typo"
            variant="h4"
            component="h2"
            color="#ffffff"
            sx={{
              textAlign: "center",
              fontSize: 40,
            }}
          >
            PRESTIGE ESTATE IN NUMBERS
            <Typography
              className="prestige-body-typo"
              sx={{
                fontSize: 15,
              }}
              variant="body1"
              color="#ffffff"
              gutterBottom
            >
              The real estate developer with the widest reach in the country,
              serving Filipinos for more than four decades – these numbers tell
              the story of our passion and success …
            </Typography>
          </Typography>
        </Container>

        <Container
          className="estates-main-con"
          maxWidth="xxl"
          sx={{ marginTop: "2rem" }}
        >
          <Container
            className="estates-number"
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#ffffff",
              padding: "1rem",
            }}
          >
            <Typography className="estatesnumber" variant="h4" component="h2">
              30
              <Typography
                className="estates-typo"
                sx={{
                  fontSize: 20,
                }}
                variant="body2"
                gutterBottom
              >
                Years
              </Typography>
            </Typography>

            <Typography className="estatesnumber" variant="h4" component="h2">
              40
              <Typography
                className="estates-typo"
                sx={{
                  fontSize: 20,
                }}
                variant="body2"
                gutterBottom
              >
                Provinces
              </Typography>
            </Typography>
            <Typography className="estatesnumber" variant="h4" component="h2">
              150
              <Typography
                className="estates-typo"
                sx={{
                  fontSize: 20,
                }}
                variant="body2"
                gutterBottom
              >
                Municipalities
              </Typography>
            </Typography>
            <Typography className="estatesnumber" variant="h4" component="h2">
              400,0000+
              <Typography
                className="estates-typo"
                sx={{
                  fontSize: 20,
                }}
                variant="body2"
                gutterBottom
              >
                Homes Built
              </Typography>
            </Typography>
          </Container>
          <Typography
            className="estates-typo"
            sx={{
              fontSize: 20,
              marginTop: "1rem",
              textAlign: "center",
              color: "#ffffff",
              padding: "1rem",
            }}
            variant="body2"
            gutterBottom
          >
            ...and Counting
          </Typography>
        </Container>
      </Container>
    </>
  );
}

export default AboutPage;
