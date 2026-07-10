import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";

import {
  DescriptionRounded,
  ErrorOutlineRounded,
  LightbulbRounded,
  AutoAwesomeRounded,
  PersonRounded,
  CalendarMonthRounded,
  GroupsRounded,
  RocketLaunchRounded,
  CheckCircleRounded,
} from "@mui/icons-material";

function SectionTitle({ icon, title, color }) {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{ mb: 2 }}
    >
      {icon}

      <Typography
        variant="h5"
        fontWeight={700}
        color={color}
      >
        {title}
      </Typography>
    </Stack>
  );
}

function ProjectOverview({ project }) {
  const theme = useTheme();

  const quickInfo = [
    {
      icon: <PersonRounded fontSize="small" />,
      label: "Role",
      value: project.role.title,
    },
    {
      icon: <CalendarMonthRounded fontSize="small" />,
      label: "Duration",
      value: project.duration,
    },
    {
      icon: <GroupsRounded fontSize="small" />,
      label: "Team",
      value: project.team,
    },
    {
      icon: <RocketLaunchRounded fontSize="small" />,
      label: "Status",
      value: project.status,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        fontWeight={800}
        mb={6}
        fontSize={{ xs: "clamp(20px,4vw,40px)", md: "clamp(30px,4vw,50px)" }}
        color={theme.palette.text.primary}
      >
        Project Overview
      </Typography>

      {/* ================= TOP ================= */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "2fr 1fr",
          },
          gap: 6,
          mb: 8,
        }}
      >
        {/* Description */}

        <Box>
          <SectionTitle
            color={theme.palette.primary.main}
            title="About the project"
            icon={
              <DescriptionRounded
                sx={{ color: theme.palette.primary.main }}
              />
            }
          />

          <Typography
            sx={{
              color: "text.secondary",
              lineHeight: 2,
              fontSize: 17,
            }}
          >
            {project.longDescription}
          </Typography>
        </Box>

        {/* Quick facts */}

        <Box>
          <SectionTitle
            color={theme.palette.primary.main}
            title="Quick facts"
            icon={
              <AutoAwesomeRounded
                sx={{ color: theme.palette.primary.main }}
              />
            }
          />

          <Stack spacing={2}>
            {quickInfo.map((item) => (
              <Box
                key={item.label}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  pb: 1.5,
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  {item.icon}

                  <Typography
                    fontWeight={600}
                  >
                    {item.label}
                  </Typography>
                </Stack>

                <Typography color="text.secondary">
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* ================= BOTTOM ================= */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "repeat(3,1fr)",
          },
          gap: 5,
        }}
      >
        {/* Problem */}

        <Box>
          <SectionTitle
            color="#e53935"
            title="Problem"
            icon={
              <ErrorOutlineRounded
                sx={{ color: "#e53935" }}
              />
            }
          />

          <Stack spacing={2}>
            {project.problem.map((item) => (
              <Stack
                key={item}
                direction="row"
                spacing={1.5}
                alignItems="flex-start"
              >
                <CheckCircleRounded
                  sx={{
                    color: "#e53935",
                    mt: "3px",
                    fontSize: 18,
                  }}
                />

                <Typography color="text.secondary">
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* Solution */}

        <Box>
          <SectionTitle
            color="#43a047"
            title="Solution"
            icon={
              <LightbulbRounded
                sx={{ color: "#43a047" }}
              />
            }
          />

          <Stack spacing={2}>
            {project.solution.map((item) => (
              <Stack
                key={item}
                direction="row"
                spacing={1.5}
                alignItems="flex-start"
              >
                <CheckCircleRounded
                  sx={{
                    color: "#43a047",
                    mt: "3px",
                    fontSize: 18,
                  }}
                />

                <Typography color="text.secondary">
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* Features */}

        <Box>
          <SectionTitle
            color={theme.palette.primary.main}
            title="Key Features"
            icon={
              <AutoAwesomeRounded
                sx={{
                  color: theme.palette.primary.main,
                }}
              />
            }
          />

          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
          >
            {project.features.map((feature) => (
              <Chip
                key={feature}
                label={feature}
                sx={{
                  fontWeight: 600,
                  borderRadius: 2,
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

ProjectOverview.propTypes = {
  project: PropTypes.shape({
    longDescription: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    problem: PropTypes.arrayOf(PropTypes.string).isRequired,
    solution: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectOverview;