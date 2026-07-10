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
  CheckCircleRounded,
  LaptopMacRounded,
  BusinessRounded,
  LanguageRounded,
  GitHub,
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
        fontSize={"clamp(16px,2vw,26px)"}
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
    icon: <PersonRounded fontSize="small" sx={{ color: theme.palette.text.primary }} />,
    label: "Role",
    value: project.role.title,
  },
  {
    icon: <LaptopMacRounded fontSize="small" sx={{ color: theme.palette.text.primary }} />,
    label: "Platform",
    value: project.platform,
  },
  {
    icon: <BusinessRounded fontSize="small" sx={{ color: theme.palette.text.primary }} />,
    label: "Industry",
    value: project.industry,
  },
    project.demoUrl && {
    icon: <LanguageRounded fontSize="small" sx={{ color: theme.palette.text.primary }} />,
    label: "Live Demo",
    value: project.demoUrl,
    isLink: true,
  },
  project.githubUrl && {
    icon: <GitHub fontSize="small" sx={{ color: theme.palette.text.primary }} />,
    label: "GitHub",
    value: project.githubUrl,
    isLink: true,
  },
].filter(Boolean);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        fontWeight={800}
        mb={{xs:2,md:6}}
        fontSize={"clamp(20px,4vw,40px)"}
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
                sx={{ color: theme.palette.primary.main ,fontSize:{xs:20,md:25}}}
              />
            }
          />

          <Typography
            sx={{
              color: "text.secondary",
              lineHeight: 2,
              fontSize: "clamp(13px,2vw,17px)",
            }}
          >
            {project.longDescription}
          </Typography>
        </Box>

       {/* Quick Facts */}

<Box>
  <SectionTitle
    color={theme.palette.primary.main}
    title="Quick Facts"
    icon={
      <AutoAwesomeRounded
        sx={{
          color: theme.palette.primary.main,
          fontSize: { xs: 20, md: 25 },
        }}
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
          gap: 2,
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
            color="text.primary"
            fontSize="clamp(13px,2vw,16px)"
          >
            {item.label}
          </Typography>
        </Stack>

        {item.isLink ? (
          <Typography
            component="a"
            href={item.value}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "secondary.main",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "clamp(12px,2vw,16px)",
              transition: ".2s",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {item.label === "GitHub" ? "View Repository" : "Open Website"}
          </Typography>
        ) : (
          <Typography
            color="text.secondary"
            fontSize="clamp(13px,2vw,16px)"
            textAlign="right"
          >
            {item.value}
          </Typography>
        )}
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
                sx={{ color: "#e53935",fontSize:{xs:20,md:25} }}
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
                    fontSize: {xs:12,sm:18},
                  }}
                />

                <Typography color="text.secondary" fontSize={"clamp(13px,2vw,17px)"}>
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
                sx={{ color: "#43a047",fontSize:{xs:20,md:25} }}
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
                    fontSize: {xs:12,sm:18},
                  }}
                />

                <Typography color="text.secondary" fontSize={"clamp(13px,2vw,17px)"}>
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
                  color: theme.palette.primary.main,fontSize:{xs:20,md:25}
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
                  fontSize:"clamp(11px,1.5vw,13px)",
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