import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Typography,
  Button,
  Chip,
  Stack,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useCustomTheme } from "../../../context/themeContext";

/** Pulls a clean, displayable hostname out of a full URL, or null if invalid/empty. */
function getDisplayHost(url) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function MiniNav({ color }) {
  const { mode, toggleTheme } = useCustomTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
      }}
    >
      <Button
        component={RouterLink}
        to="/"
        startIcon={<ArrowBackRoundedIcon />}
        sx={{
          textTransform: "none",
          color: "text.secondary",
          fontWeight: 600,
          "&:hover": { color },
        }}
      >
        Back to Home
      </Button>

      <IconButton
        onClick={toggleTheme}
        aria-label="Toggle light/dark mode"
        sx={{
          border: (t) => `1px solid ${t.palette.divider}`,
          transition: "all 0.25s ease",
          "&:hover": { borderColor: color, color },
        }}
      >
        {mode === "dark" ? (
          <LightModeRoundedIcon fontSize="small" />
        ) : (
          <DarkModeRoundedIcon fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
}

function ProjectHero({ project }) {
  const theme = useTheme();
  const demoHost = getDisplayHost(project.demoUrl);

  const images =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, md: 5 },
        mb: 8,
      }}
    >
      <MiniNav color={project.color} />

      {/* ---------------- Header ---------------- */}
      <Stack
        spacing={2.5}
        alignItems="center"
        textAlign="center"
        width={{ xs: "100%", md: "85%", lg: "70%" }}
      >
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="center"
        >
          {project.role?.title && (
            <Chip
              icon={<PersonRoundedIcon sx={{ fontSize: "16px !important" }} />}
              label={project.role.title}
              size="small"
              sx={{
                bgcolor: alpha(project.color, 0.15),
                color: project.color,
                fontWeight: 600,
              }}
            />
          )}
          {project.status && (
            <Chip label={project.status} size="small" variant="outlined" />
          )}
          {project.duration && (
            <Chip label={project.duration} size="small" variant="outlined" />
          )}
          {project.client && (
            <Chip label={project.client} size="small" variant="outlined" />
          )}
        </Stack>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: theme.palette.primary.text,
            lineHeight: 1.15,
          }}
        >
          {project.title}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            lineHeight: 1.8,
            maxWidth: "700px",
          }}
        >
          {project.shortDescription}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="center"
          rowGap={1}
        >
          {project.technologies.map((tech) => (
            <Chip
              key={tech.name}
              label={tech.name}
              icon={<tech.icon style={{ fontSize: 16 }} />}
              sx={{
                backgroundColor: alpha(tech.color, 0.15),
                color: tech.color,
                border: `1px solid ${alpha(tech.color, 0.4)}`,
                fontWeight: 600,
                "& .MuiChip-icon": { color: tech.color },
              }}
              variant="outlined"
            />
          ))}
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          {project.demoUrl && (
            <Button
              variant="contained"
              size="large"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<LaunchIcon />}
              sx={{
                bgcolor: project.color,
                textTransform: "none",
                "&:hover": { bgcolor: alpha(project.color, 0.85) },
              }}
            >
              Live Demo
            </Button>
          )}

          {project.githubUrl && (
            <Button
              variant="outlined"
              size="large"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<GitHubIcon />}
              sx={{ textTransform: "none" }}
            >
              View Source
            </Button>
          )}
        </Stack>

        {demoHost && (
          <Stack
            direction="row"
            spacing={0.7}
            alignItems="center"
            sx={{ color: "text.secondary", fontSize: "0.85rem" }}
          >
            <LinkRoundedIcon sx={{ fontSize: 15 }} />
            <Typography
              component="a"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: "0.85rem",
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: project.color, textDecoration: "underline" },
              }}
            >
              {demoHost}
            </Typography>
          </Stack>
        )}
      </Stack>

      {/* ---------------- Slider ---------------- */}
      <Box
        sx={{
          width: "100%",
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.18)}`,
          "--swiper-navigation-color": project.color,
          "--swiper-pagination-color": project.color,
          "--swiper-navigation-size": "22px",
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={images.length > 1}
          pagination={images.length > 1 ? { clickable: true } : false}
          autoplay={
            images.length > 1
              ? { delay: 4000, pauseOnMouseEnter: true, disableOnInteraction: false }
              : false
          }
          loop={images.length > 1}
          style={{ width: "100%" }}
        >
          {images.map((image, i) => (
            <SwiperSlide key={`${image}-${i}`}>
              <Box
                component="img"
                src={image}
                alt={`${project.title} preview ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                sx={{
                  width: "100%",
                  aspectRatio: { xs: "4/3", sm: "16/9" },
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

ProjectHero.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    status: PropTypes.string,
    duration: PropTypes.string,
    client: PropTypes.string,
    color: PropTypes.string.isRequired,

    role: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      responsibilities: PropTypes.arrayOf(PropTypes.string),
    }),

    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,

    image: PropTypes.string,
    gallery: PropTypes.arrayOf(PropTypes.string),

    demoUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }).isRequired,
};

export default ProjectHero;