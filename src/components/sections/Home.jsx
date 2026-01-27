import {
  Article,
  Download,
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  WavingHand,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

const contactItems = [
  {
    icon: (
      <GitHub
        sx={{ fontSize: { xs: "15px", sm: "22px", md: "27px", lg: "30px" } }}
      />
    ),
    link: "https://github.com/Mohamed-Messaoudene",
    color: "#181717", // Official GitHub black
  },
  {
    icon: (
      <LinkedIn
        sx={{ fontSize: { xs: "15px", sm: "22px", md: "27px", lg: "30px" } }}
      />
    ),
    link: "https://www.linkedin.com/in/mohamed-messaoudene-ab595a269",
    color: "#0077B5", // Official LinkedIn blue
  },
  {
    title: "medium",
    icon: (
      <Article
        sx={{ fontSize: { xs: "15px", sm: "22px", md: "27px", lg: "30px" } }}
      />
    ),
    link: "https://medium.com/@mohamed.messaoudene_67018",
    color: "#12100E", // Official Medium black
  },
  {
    icon: (
      <Instagram
        sx={{ fontSize: { xs: "15px", sm: "22px", md: "27px", lg: "30px" } }}
      />
    ),
    link: "https://www.instagram.com/messaoudene691/",
    color: "#E1306C", // Official Instagram pinkish-red
  },
  {
    icon: (
      <Email
        sx={{ fontSize: { xs: "15px", sm: "22px", md: "27px", lg: "30px" } }}
      />
    ),
    link: "mailto:messaoudenemohamed54@gmail.com",
    color: "#D44638", // Official Gmail red
  },
];

function Home() {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <Stack
      id="home"
      direction={{ sx: "column", sm: "row" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        height: { xs: "auto", md: "70vh" },
        width: { xs: "97%", md: "90%", lg: "85%", xl: "75%" },
      }}
    >
      <Box
        ref={ref}
        display={"flex"}
        gap={"12px"}
        width={{ sx: "100%", sm: "58%" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            width={"15px"}
            height={"15px"}
            borderRadius={"50%"}
            sx={{ backgroundColor: theme.palette.primary.main }}
          />
          <Box
            width={"3px"}
            height={{ xs: "180px",sm:'210px', md: "260px", lg: "330px" }}
            sx={{
              backgroundImage: `linear-gradient(${theme.palette.primary.main}, transparent)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          />
        </Box>
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(18px, 4vw, 45px)",
              marginBottom: "10px",
            }}
            color={theme.palette.primary.text}
          >
            Hi
            <WavingHand
              sx={{
                fontSize: "clamp(18px, 3vw, 455px)",
                marginInline: 1,
              }}
            />
           {" , I'm"}
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                3000,
                "Messaoudene Mohamed", // initially rendered starting point
                3000,
                "a fullstack developer",
              ]}
              speed={10}
              style={{
                color: theme.palette.primary.main,
                display: "block",
              }}
              repeat={Infinity}
            />
          </Typography>
          <Typography
            variant="body1"
            color={theme.palette.primary.text}
            sx={{
              fontSize: "clamp(12px, 2vw, 24px)",
              marginBlock: { xs: 0, sm: 1, lg: 3 },
            }}
          >
            {"a fullstack developper with MERN stack but adaptif with other technologies"
              .split(" ")
              .map((word, index) => (
                <Box
                  key={index}
                  sx={{ whiteSpace: "nowrap", display: "inline-block" }} // Prevent word breaking
                >
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
                      animate={
                        inView ? { opacity: 1, filter: "blur(0)", y: 0 } : {}
                      }
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: index * 0.25,
                      }}
                      style={{ display: "inline-block" }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                  <span>&nbsp;</span>
                </Box>
              ))}
          </Typography>
          <Stack
            direction="row"
            spacing={{ xs: 0.3, sm: 1, lg: 2 }}
            marginBlock={"15px"}
          >
            {contactItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: 30, sm: 37, lg: 45 },
                  height: { xs: 30, sm: 37, lg: 45 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  color: theme.palette.primary.text,
                  transition: "all 0.4s linear",
                  backgroundColor:
                    hoveredIndex === index ? item.color : "transparent",
                  "&:hover": {
                    backgroundColor: item.color,
                    color: "white",
                    transform: "scale(1.1)",
                  },
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <IconButton
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "inherit" }}
                >
                  {item.icon}
                </IconButton>
              </Box>
            ))}
          </Stack>
          <Stack>
            <Button
              variant="contained"
              sx={{
                paddingInline: "16px",
                paddingBlock: { xs: "0px", md: "6px" },
                width: "fit-content",
                fontSize: "clamp(10px,1vw,16px)",
                color: "white",
                backgroundColor: theme.palette.primary.main,
                textTransform: "none",
              }}
              component="a"
              href="/my resume.pdf"
              download={"my resume.pdf"}
              startIcon={
                <motion.div
                  animate={isHovered ? { y: [4] } : { y: [4, -3, 6] }}
                  transition={{
                    repeat: isHovered ? 0 : Infinity, // Loops animation
                    repeatType: "reverse", // Smooth reverse movement
                    duration: 1, // Animation duration
                    ease: "easeInOut", // Smooth easing
                  }}
                >
                  <Download sx={{ fontSize: "clamp(16px,1.6vw,24px)" }} />
                </motion.div>
              }
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              Download CV
            </Button>
          </Stack>
        </Box>
      </Box>
      <motion.div
        style={{ marginTop: "20px" }}
        initial={{ y: 30, width: 0 }}
        animate={inView ? { y: 0, width: "50%" } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <img
          src="/11436094_4707119.svg"
          alt="developper illustrative image"
          width={"100%"}
        />
      </motion.div>
    </Stack>
  );
}

export default Home;
