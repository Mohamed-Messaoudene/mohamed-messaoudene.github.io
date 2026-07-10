import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Box,
  Typography,
  Chip,
  useTheme,
  alpha,
} from "@mui/material";

import { projects } from "../../../constants";
import CustomDevider from "../../CustomDevider";
import ProjectCard from "./ProjectCard";

const ALL_FILTER = "All";

export default function ProjectsSection() {
  const theme = useTheme();
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  // Categories are derived from each project's `platform` field, so
  // adding a new platform value to your data automatically adds a
  // new filter chip here — no manual list to keep in sync.
  const categories = useMemo(() => {
    const unique = new Set(projects.map((p) => p.platform || "Other"));
    return [ALL_FILTER, ...unique];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_FILTER) return projects;
    return projects.filter((p) => (p.platform || "Other") === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      style={{ width: "100%"}}
    >
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Section heading */}
        <Box
          sx={{
            mb: { xs: 3, md: 4 },
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

          {/* Filter chips */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1,
              mt: 1,
            }}
          >
            {categories.map((category) => {
              const isActive = category === activeFilter;
              return (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setActiveFilter(category)}
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    px: 0.5,
                    bgcolor: isActive
                      ? theme.palette.primary.main
                      : alpha(theme.palette.primary.main, 0.08),
                    color: isActive ? "#fff" : theme.palette.primary.main,
                    "&:hover": {
                      bgcolor: isActive
                        ? theme.palette.primary.main
                        : alpha(theme.palette.primary.main, 0.18),
                    },
                  }}
                />
              );
            })}
          </Box>
        </Box>

        {/* Responsive grid — replaces the old horizontal-scroll carousel */}
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(auto-fill, minmax(240px, 1fr))",
              sm: "repeat(auto-fill, minmax(270px, 1fr))",
            },
            gap: 3,
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Box>

        {filteredProjects.length === 0 && (
          <Typography
            sx={{ textAlign: "center", color: "text.secondary", mt: 4 }}
          >
            No projects in this category yet.
          </Typography>
        )}
      </motion.section>
    </section>
  );
}
