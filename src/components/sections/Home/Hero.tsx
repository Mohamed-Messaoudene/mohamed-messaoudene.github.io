import { Download, WavingHand } from "@mui/icons-material";
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
import { heroText } from "../../../constants";
import { contactLinks } from "../../../constants/index";

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
        width: "100%",
      }}
    >
      <Box
        ref={ref}
        display={"flex"}
        gap={{ xs: "12px", md: "20px", lg: "30px" }}
        width={{ sx: "100%", sm: "58%" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          marginLeft={{ xs: "10px", sm: "0px" }}
        >
          <Box
            width={"15px"}
            height={"15px"}
            borderRadius={"50%"}
            sx={{ backgroundColor: theme.palette.primary.main }}
          />
          <Box
            width={"3px"}
            height="95%"
            sx={{
              backgroundImage: `linear-gradient(${theme.palette.primary.main}, transparent)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          />
        </Box>
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "clamp(18px, 4vw, 45px)",
                mb: 2,
                fontWeight: 700,
              }}
              color={theme.palette.primary.text}
            >
              Hi
              <WavingHand
                sx={{
                  fontSize: "clamp(18px,3vw,45px)",
                  mx: 1,
                }}
              />
              {"I'm"}
              <Box
                component="span"
                sx={{
                  display: "block",
                  mt: 1,
                  color: theme.palette.primary.main,
                }}
              >
                <TypeAnimation
                  sequence={[
                    1000,
                    "Mohamed Messaoudene",
                    2500,
                    "Full-Stack Developer",
                    2500,
                  ]}
                  wrapper="span"
                  speed={45}
                  deletionSpeed={55}
                  repeat={Infinity}
                />
              </Box>
            </Typography>
          </motion.div>
          <Typography
            variant="body1"
            color={theme.palette.primary.text}
            sx={{
              fontSize: "clamp(12px, 2vw, 24px)",
              marginBlock: { xs: 0, sm: 1, lg: 3 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <Typography
                variant="body1"
                color={theme.palette.primary.text}
                sx={{
                  fontSize: "clamp(12px, 2vw, 24px)",
                  marginBlock: { xs: 0, sm: 1, lg: 3 },
                  lineHeight: 1.8,
                  maxWidth: "700px",
                }}
              >
                {heroText}
              </Typography>
            </motion.div>
          </Typography>
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{
    delay: 0.7,
    duration: 0.6,
  }}
>
          <Stack
            direction="row"
            spacing={{ xs: 0.3, sm: 1, lg: 2 }}
            marginBlock={"15px"}
          >
            {contactLinks.map((item, index) => (
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
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "inherit" }}
                >
                  <item.icon
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "22px",
                        md: "27px",
                        lg: "30px",
                      },
                    }}
                  />{" "}
                </IconButton>
              </Box>
            ))}
          </Stack>
          </motion.div>
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{
    delay: 0.9,
    duration: 0.6,
  }}
>
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
              href="/CV-Messaoudene-Mohamed.pdf"
              download={"CV-Messaoudene-Mohamed.pdf"}
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
          </motion.div>
        </Box>
      </Box>
      <motion.div
        style={{ marginTop: "20px" }}
        initial={{ y: 30, width: 0 }}
        animate={inView ? { y: 0, width: "45%" } : {}}
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
