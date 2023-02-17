import React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import GoogleImg from "../Images/google.jpg";
import bestPortFolio from "../Images/bestPortFolio.png";
import Award from "../Images/winner.png";
import Certificate from "../Images/Dolly - Certificate - HiCoder.png";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Achivements = () => {
  return (
    <>
      <div style={{ backgroundColor: "menu" }}>
        <Container maxWidth="lg">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 2, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: "center",
              fontSize: "50px",
              paddingTop: "3rem",
            }}
          >
            Achivments & Awards
            <br />
            ~~~~~~~~~~~~~~~~~~~~
          </motion.h1>
          <Box sx={{ p: 5, color: "#3b2930" }}>
            <Grid container spacing={2} sx={{ py: 10 }}>
              <Grid xs={6}>
                <Typography component="div" variant="h5" sx={{ mr: 2 }}>
                  1. Chosen for Women in Tech @IIIT for launching
                  recipesinhindi.net and gaining 90,000+ visitors in a month
                  without ads.
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography component="div">
                  <img src={GoogleImg} alt="" width="450px" />
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ py: 10 }}>
              <Grid xs={6}>
                <Typography component="div">
                  <img src={Certificate} alt="" width="450px" />
                </Typography>
              </Grid>

              <Grid xs={6}>
                <Typography component="div" variant="h5">
                  2. I have successfully complited Frontend development course.
                  While learning completed 15+ complex projects Like YouTube,
                  Stack Overflow, Myntra, WhatsApp Web and More...
                </Typography>
                <motion.div
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: "1", type: "spring" }}
                >
                  <Link to="/projects" className="myproject">
                    <Button
                      size="large"
                      variant="outlined"
                      endIcon={<ArrowRightAltIcon />}
                      style={{ margin: "10px" }}
                    >
                      My Projects
                    </Button>
                  </Link>
                </motion.div>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ py: 10 }}>
              <Grid xs={6}>
                <Typography component="div" variant="h5">
                  3. Won HiCoder Website Development competition in May, 2021
                  for completing 14 paged website in 3 days from scratch.
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography component="div">
                  <img src={Award} alt="" width="450px" />
                </Typography>
              </Grid>
              <Grid container spacing={2} sx={{ py: 10 }}>
                <Grid xs={6}>
                  <Typography component="div">
                    <img src={bestPortFolio} alt="" width="450px" />
                  </Typography>
                </Grid>

                <Grid xs={6}>
                  <Typography component="div" variant="h5">
                    4. Recently, My PortFolio got selected in top 20 best
                    PortFolio List over 800+ protfolio/blog websites. Getting
                    recognized by Uber's Software engineer is a great moment for
                    me.
                  </Typography>
                  <motion.div
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: "1", type: "spring" }}
                  >
                    <Button
                      href="https://www.linkedin.com/posts/codewithdolly_winners-of-the-20-most-exciting-portfolio-activity-6908852712268537856-bIvS?utm_source=linkedin_share&utm_medium=member_desktop_web"
                      size="large"
                      variant="outlined"
                      color="error"
                      style={{ margin: "10px" }}
                    >
                      For More...
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Achivements;
