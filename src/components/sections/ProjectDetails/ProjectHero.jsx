import PropTypes from "prop-types";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { alpha, Box, Chip, Stack, Typography, useTheme } from "@mui/material";


/** Pulls a clean, displayable hostname out of a full URL, or null if invalid/empty. */
function getDisplayHost(url) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
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
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {project.role?.title && (
            <Chip
              icon={<PersonRoundedIcon sx={{ fontSize: "16px !important" }} />}
              label={project.role.title}
              size="small"
              sx={{
                bgcolor: alpha(project.color, 0.12),
                color: project.color,
                fontWeight: 600,
              }}
            />
          )}

          {project.platform && (
            <Chip label={project.platform} size="small" variant="outlined" />
          )}

          {project.industry && (
            <Chip label={project.industry} size="small" variant="outlined" />
          )}

          {project.status && (
            <Chip label={project.status} size="small" variant="outlined" />
          )}
        </Stack>

        <Typography
          sx={{
            fontWeight: 800,
            color: "text.primary",
            lineHeight: 1.15,
            fontSize: {
              xs: "2rem",
              sm: "2.7rem",
              md: "3.6rem",
              lg: "4.2rem",
            },
          }}
        >
          {project.title}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 1.9,
            maxWidth: 760,
            fontSize: {
              xs: "0.95rem",
              sm: "1.05rem",
              md: "1.15rem",
            },
          }}
        >
          {project.shortDescription}
        </Typography>

        {demoHost && (
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              mt: 1,
              color: "text.secondary",
            }}
          >
            <LinkRoundedIcon
              sx={{
                fontSize: 18,
              }}
            />

            <Typography
              component="a"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "inherit",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                },

                "&:hover": {
                  color: project.color,
                  textDecoration: "underline",
                },
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
          borderRadius: {
            xs: 3,
            md: 4,
          },
          overflow: "hidden",
          boxShadow: `0 14px 45px ${alpha(theme.palette.common.black, 0.18)}`,
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
              ? {
                  delay: 4000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }
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
                  display: "block",
                  aspectRatio: {
                    xs: "4 / 3",
                    sm: "16 / 9",
                  },
                  objectFit: "cover",
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

    platform: PropTypes.string,
    industry: PropTypes.string,

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
      }),
    ).isRequired,

    image: PropTypes.string,
    gallery: PropTypes.arrayOf(PropTypes.string),

    demoUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }).isRequired,
};

export default ProjectHero;
