"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView from react-intersection-observer
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  useTheme,
  alpha,
  Container,
} from "@mui/material";
import { GitHub, Launch, SwipeRounded } from "@mui/icons-material";
import CustomDevider from "../CustomDevider";
import { projects } from "../../constants/index";

export default function ProjectsSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const theme = useTheme();

  // Use useInView from react-intersection-observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.4, // Trigger when 40% of the section is in view
  });

  // Update scroll state
  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
      setScrollPosition(scrollLeft);
    }
  };

  // Handle custom scrollbar click
  const handleScrollbarClick = (e) => {
    if (scrollRef.current) {
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const clickPosition = e.clientX - left;
      const scrollWidth =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const scrollTo = (clickPosition / width) * scrollWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <Container
      id="projects"
      maxWidth={false}
      sx={{
        maxWidth: "1300px", // Specific width between xl and lg
        py: { xs: 4, sm: 6, md: 12 },
        position: "relative",
      }}
    >
      {/* Wrap the section with motion.section and use ref */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Section heading */}
        <Box
          sx={{
            mb: { xs: 3, md: 5 },
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "clamp(18px, 3vw, 40px)",
              color: theme.palette.primary.text,
            }}
          >
            My{" "}
            <span style={{ color: theme.palette.primary.main }}>Projects</span>
          </Typography>
          <CustomDevider />
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              maxWidth: "600px",
              mx: "auto",
              my: "15px",
              color: "text.secondary",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            Explore my latest work and creative projects
          </Typography>
        </Box>

        {/* Projects container with horizontal scroll and fade effects */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden", // Hide overflow for fade effects
          }}
        >
          {/* Fade effect for left side */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "100px",
              background: `linear-gradient(to right, ${theme.palette.background.bgcolor}, transparent)`,
              zIndex: 2,
              pointerEvents: "none",
              opacity: canScrollLeft ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Fade effect for right side */}
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "100px",
              background: `linear-gradient(to left, ${theme.palette.background.bgcolor}, transparent)`,
              zIndex: 2,
              pointerEvents: "none",
              opacity: canScrollRight ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
              gap: 1,
            }}
          >
            <Box
              component={motion.div}
              animate={{ x: [-5, 5, -5] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <SwipeRounded fontSize="small" sx={{ color: "wheat" }} />
            </Box>
            <Typography variant="caption" color={theme.palette.primary.text}>
              Swipe to explore projects
            </Typography>
          </Box>

          {/* Scrollable projects container */}
          <Box
            ref={scrollRef}
            onScroll={updateScrollState}
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 3,
              pb: 3,
              width: "100%",
              mx: "auto",
              scrollBehavior: "smooth",
              scrollbarWidth: "none", // Hide native scrollbar
              "&::-webkit-scrollbar": {
                display: "none", // Hide native scrollbar
              },
            }}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 },
                }}
                sx={{
                  width: {
                    xs: "calc(60% - 16px)",
                    sm: "calc(50% - 16px)",
                    md: "calc(37% - 16px)",
                    lg: "calc(30% - 16px)",
                  },
                  minWidth: "270px",
                  height: { xs: 430, md: 450 },
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: `0 4px 12px ${alpha(
                    theme.palette.common.black,
                    0.1
                  )}`,
                  flex: "0 0 auto",
                  bgcolor:
                    theme.palette.mode === "dark" ? "#333842" : "#f8f9fa",
                  position: "relative",
                  mx: { xs: "auto" },
                  transition: "all 0.4s ease",
                  border: "1px solid transparent",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background: project.color,
                    zIndex: 1,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height={180}
                  image={project.image}
                  alt={project.title}
                  sx={{ transition: "transform 0.5s ease" }}
                />

                <CardContent
                  sx={{
                    p: 2,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "1rem", md: "1.25rem" },
                      mb: 1,
                      color: theme.palette.mode === "dark" ? "#fff" : "#333",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.7)"
                          : "rgba(0,0,0,0.6)",
                      fontSize: { xs: "0.7rem", md: "0.875rem" },
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 2, flexGrow: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        display: "block",
                        mb: 0.5,
                        color:
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.9)"
                            : "rgba(0,0,0,0.8)",
                      }}
                    >
                      Technologies
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            height: 20,
                            fontSize: { xs: "0.5rem", md: "0.65rem" },
                            background: alpha(
                              project.color,
                              theme.palette.mode === "dark" ? 0.2 : 0.1
                            ),
                            border: `1px solid ${alpha(project.color, 0.3)}`,
                            mb: 0.5,
                            color:
                              theme.palette.mode === "dark"
                                ? "#fff"
                                : "inherit",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
                   {project.githubUrl && (<Button
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHub fontSize="small" />}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderRadius: "6px",
                        textTransform: "none",
                        flex: 1,
                        fontSize: "0.75rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: `0 4px 8px ${alpha(
                            theme.palette.common.black,
                            0.1
                          )}`,
                        },
                      }}
                    >
                      Code
                    </Button>)}

                    {project.demoUrl && (
                      <Button
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<Launch fontSize="small" />}
                        variant="contained"
                        size="small"
                        sx={{
                          borderRadius: "6px",
                          textTransform: "none",
                          flex: 1,
                          fontSize: "0.75rem",
                          background: project.color,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: alpha(project.color, 0.8),
                            transform: "translateY(-2px)",
                            boxShadow: `0 4px 12px ${alpha(
                              project.color,
                              0.3
                            )}`,
                          },
                        }}
                      >
                        Demo
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Custom scrollbar */}
          <Box
            onClick={handleScrollbarClick}
            sx={{
              width: "200px", // Fixed width for the scrollbar
              height: "6px",
              backgroundColor: alpha(theme.palette.primary.main, 0.2),
              borderRadius: "4px",
              position: "relative",
              mx: "auto",
              mt: 2,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: `${
                  (scrollPosition /
                    (scrollRef.current?.scrollWidth -
                      scrollRef.current?.clientWidth)) *
                  100
                }%`,
                height: "100%",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "4px",
                position: "absolute",
                left: 0,
                top: 0,
                transition: "width 0.3s ease",
              }}
            />
          </Box>
        </Box>
      </motion.section>
    </Container>
  );
}
