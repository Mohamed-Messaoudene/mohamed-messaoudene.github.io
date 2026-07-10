import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  IconButton,
  Tooltip,
  useTheme,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const MAX_VISIBLE_TECHS = 4;

export default function ProjectCard({ project }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const detailPath = `/projects/${project.slug}`;

  const visibleTechs = project.technologies.slice(0, MAX_VISIBLE_TECHS);
  const hiddenCount = project.technologies.length - visibleTechs.length;

  const goToDetail = () => navigate(detailPath);

  const stopAndOpen = (e) => {
    // Prevent the card's own click-to-navigate from also firing
    // when someone clicks a demo/GitHub icon inside it.
    e.stopPropagation();
  };

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={goToDetail}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") goToDetail();
      }}
      aria-label={`View details for ${project.title}`}
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: "14px",
        overflow: "hidden",
        position: "relative",
        bgcolor: theme.palette.mode === "dark" ? "#333842" : "#f8f9fa",
        border: "1px solid transparent",
        boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.1)}`,
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        "&:hover": {
          boxShadow: `0 10px 28px ${alpha(project.color, 0.25)}`,
          borderColor: alpha(project.color, 0.4),
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "3px",
          background: project.color,
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height={170}
          image={project.image}
          alt={project.title}
        />

        {/* Compact external-link icons, layered on the image */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 0.5,
          }}
        >
          {project.githubUrl && (
            <Tooltip title="View source">
              <IconButton
                size="small"
                component="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopAndOpen}
                sx={{
                  bgcolor: alpha(theme.palette.common.black, 0.55),
                  color: "#fff",
                  "&:hover": { bgcolor: alpha(theme.palette.common.black, 0.75) },
                }}
              >
                <GitHubIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Tooltip>
          )}
          {project.demoUrl && (
            <Tooltip title="Live demo">
              <IconButton
                size="small"
                component="a"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopAndOpen}
                sx={{
                  bgcolor: alpha(project.color, 0.85),
                  color: "#fff",
                  "&:hover": { bgcolor: project.color },
                }}
              >
                <LaunchIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        {project.status && (
          <Chip
            label={project.status}
            size="small"
            sx={{
              position: "absolute",
              bottom: 8,
              left: 8,
              height: 20,
              fontSize: "0.65rem",
              fontWeight: 700,
              bgcolor: alpha(theme.palette.common.black, 0.6),
              color: "#fff",
            }}
          />
        )}
      </Box>

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
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            mb: 0.75,
            color: theme.palette.mode === "dark" ? "#fff" : "#222",
          }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 1.5,
            color:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.7)"
                : "rgba(0,0,0,0.6)",
            fontSize: "0.8rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.shortDescription}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: "auto" }}>
          {visibleTechs.map((tech) => (
            <Chip
              key={tech.name}
              label={tech.name}
              size="small"
              sx={{
                height: 20,
                fontSize: "0.65rem",
                bgcolor: alpha(project.color, theme.palette.mode === "dark" ? 0.2 : 0.1),
                border: `1px solid ${alpha(project.color, 0.3)}`,
                color: theme.palette.mode === "dark" ? "#fff" : "inherit",
              }}
            />
          ))}
          {hiddenCount > 0 && (
            <Chip
              label={`+${hiddenCount}`}
              size="small"
              sx={{
                height: 20,
                fontSize: "0.65rem",
                fontWeight: 700,
                bgcolor: alpha(theme.palette.text.primary, 0.08),
              }}
            />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: 1.5,
            color: project.color,
            fontSize: "0.78rem",
            fontWeight: 600,
          }}
        >
          View details
          <ArrowForwardRoundedIcon sx={{ fontSize: 16, ml: 0.4 }} />
        </Box>
      </CardContent>
    </Card>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string,
    color: PropTypes.string.isRequired,
    demoUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.elementType,
        color: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};