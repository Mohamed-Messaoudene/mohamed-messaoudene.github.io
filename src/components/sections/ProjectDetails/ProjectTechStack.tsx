import { Box, Typography, Grid, Stack, useTheme } from "@mui/material";
import {
  PersonRounded,
  CodeRounded,
  CheckCircleRounded,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { ProjectRole, Technology } from "../../../types";

interface ProjectTechStackProps {
  role: ProjectRole;
  technologies: Technology[]
}

function ProjectTechStack({ role, technologies }:ProjectTechStackProps) {
  const theme = useTheme();

  const techs = [...technologies, ...technologies, ...technologies];
  const middle = Math.ceil(role.responsibilities.length / 2);

  const leftColumn = role.responsibilities.slice(0, middle);
  const rightColumn = role.responsibilities.slice(middle);
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 6 },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* My Role */}

        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 2 }}
              alignItems="center"
              mb={2}
            >
              <PersonRounded
                sx={{
                  fontSize: "clamp(24px,4vw,40px)",
                  color: theme.palette.primary.text,
                }}
              />

              <Typography
                variant="h3"
                fontWeight={800}
                mb={{ xs: 0, md: 6 }}
                fontSize={"clamp(18px,4vw,30px)"}
                color={theme.palette.text.primary}
              >
                {" "}
                My Role
              </Typography>
            </Stack>

            <Typography
              variant="h5"
              color="primary"
              fontWeight={700}
              fontSize={"clamp(16px,2vw,26px)"}
              mb={2}
            >
              {role.title}
            </Typography>

            <Typography
              color="text.secondary"
              lineHeight={1.9}
              mb={{ xs: 2, md: 4 }}
              fontSize="clamp(14px,2vw,18px)"
            >
              {role.description}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: {
                  xs: 2,
                  md: 6,
                },
                mt: 2,
              }}
            >
              {[leftColumn, rightColumn].map((column, columnIndex) => (
                <Stack key={columnIndex} spacing={2}>
                  {column.map((item) => (
                    <Stack
                      key={item}
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                    >
                      <CheckCircleRounded
                        sx={{
                          color: "primary.main",
                          fontSize: 18,
                          mt: "2px",
                          flexShrink: 0,
                        }}
                      />

                      <Typography
                        color="text.secondary"
                        sx={{
                          fontSize: "clamp(13px,2vw,17px)",
                          lineHeight: 1.8,
                        }}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Tech Stack */}

        <Grid item xs={12} md={7}>
          <Box sx={{ height: "100%" }}>
            <Box>
              <Stack
                direction="row"
                spacing={{ xs: 1, sm: 2 }}
                alignItems="center"
                mb={2}
              >
                <CodeRounded
                  sx={{
                    fontSize: "clamp(24px,4vw,40px)",
                    color: theme.palette.primary.text,
                  }}
                />

                <Typography
                  variant="h3"
                  fontWeight={800}
                  mb={{ xs: 2, md: 6 }}
                  fontSize={"clamp(18px,4vw,30px)"}
                  color={theme.palette.text.primary}
                >
                  {" "}
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
                          px: { xs: 1, md: 2 },
                          py: 1,
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
                        <Icon
                          sx={{ fontSize: { xs: 10, sm: 20 }, color: tech.color }}
                        />

                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "clamp(13px,2vw,17px)",
                            color: theme.palette.primary.text,
                          }}
                          whiteSpace="nowrap"
                        >
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

export default ProjectTechStack;
