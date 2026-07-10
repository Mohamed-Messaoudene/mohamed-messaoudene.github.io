import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Grid,
  Stack,
  useTheme,
} from "@mui/material";
import {
  PersonRounded,
  CodeRounded,
  CheckCircleRounded,
} from "@mui/icons-material";
import { motion } from "framer-motion";


function ProjectTechStack({ role, technologies }) {
  const theme = useTheme();

  const techs = [...technologies, ...technologies, ...technologies];
  return (
    <Box
      component="section"
      sx={{
        py: 10,
        width: "100%",
      }}
    >
      {/* Section Title */}

      <Typography variant="h3" fontWeight={700} textAlign="center" mb={2}>
        Tech Stack{" "}
        <Box component="span" color="primary.main">
          & My Role
        </Box>
      </Typography>

      <Typography
        textAlign="center"
        color="text.secondary"
        maxWidth={700}
        mx="auto"
        mb={7}
        lineHeight={1.8}
      >
        Technologies used to build the project and my main responsibilities
        during development.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {/* My Role */}

        <Grid item xs={12} md={5}>
          <Box
            sx={{
              maxWidth: 900,
              mx: "auto",
              width: "100%",
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center" mb={4}>
              <PersonRounded color="primary" sx={{ fontSize: 42 }} />

              <Typography variant="h4" fontWeight={700}>
                My Role
              </Typography>
            </Stack>

            <Typography variant="h5" color="primary" fontWeight={700} mb={2}>
              {role.title}
            </Typography>

            <Typography color="text.secondary" lineHeight={1.9} mb={4}>
              {role.description}
            </Typography>

            <Stack spacing={2}>
              {role.responsibilities.map((item) => (
                <Stack key={item} direction="row" spacing={2}>
                  <CheckCircleRounded color="primary" />

                  <Typography color="text.secondary">{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Tech Stack */}

        {/* Tech Stack */}

        <Grid item xs={12} md={7}>
          <Box sx={{ height: "100%" }}>
            <Box>
              <Stack direction="row" spacing={2} alignItems="center" mb={5}>
                <CodeRounded color="primary" sx={{ fontSize: 42 }} />

                <Typography variant="h4" fontWeight={700}>
                  Technology Stack
                </Typography>
              </Stack>

              {/* marquee */}
              <Box
                sx={{
                  overflow: "hidden",
                  width: "100%",
                  py: 2,
                }}
              >
                <motion.div
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{
                    display: "flex",
                    gap: 20,
                    width: "max-content",
                  }}
                >
                  {techs.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                      <Stack
                        key={`${tech.name}-${index}`}
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                        sx={{
                          px: 3,
                          py: 1.4,
                          border: `1px solid ${theme.palette.divider}`,
                          borderRadius: 999,
                          flexShrink: 0,
                          transition: ".25s",

                          "&:hover": {
                            transform: "translateY(-3px)",
                            borderColor: tech.color,
                          },
                        }}
                      >
                        <Icon size={22} color={tech.color} />

                        <Typography fontWeight={600} whiteSpace="nowrap">
                          {tech.name}
                        </Typography>
                      </Stack>
                    );
                  })}
                </motion.div>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

ProjectTechStack.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,

  role: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectTechStack;
