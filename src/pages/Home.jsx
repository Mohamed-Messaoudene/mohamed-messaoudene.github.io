import { Box, useTheme } from "@mui/material";

import NavBar from "../components/NavBar";

import Home from "../components/sections/HomePageSections/Home";
import Experience from "../components/sections/HomePageSections/Experience";
import AboutMe from "../components/sections/HomePageSections/AboutMe";
import Projects from "../components/sections/HomePageSections/Projects";
import Skills from "../components/sections/HomePageSections/Skills";
import Contact from "../components/sections/HomePageSections/Contact";
import Footer from "../components/sections/Footer";

function HomePage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.bgcolor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <NavBar />

      <Box
        sx={{
          width: {
            xs: "97%",
            md: "90%",
            lg: "85%",
            xl: "75%",
          },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { xs: "100px", sm: "120px" },
          mx: "auto",
        }}
      >
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <AboutMe />
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
}

export default HomePage;