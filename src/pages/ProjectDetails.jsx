import { useParams, Navigate } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

import Footer from "../components/sections/Footer";

// import ProjectOverview from "../components/project/ProjectOverview";
import { projects } from "../constants";
import ProjectHero from "../components/sections/ProjectDetails/ProjectHero";
import ProjectOverview from "../components/sections/ProjectDetails/ProjectOverview";
import ProjectTechStack from "../components/sections/ProjectDetails/ProjectTechStack";
import { useEffect } from "react";
import MiniNav from "../components/sections/ProjectDetails/NavBar";

function ProjectDetail() {
  const { slug } = useParams();

  const theme = useTheme();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [slug]);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.bgcolor,
        minHeight: "100vh",
        pt: { xs: 11, md: 14 },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "95%",
            md: "90%",
            lg: "85%",
            xl: "75%",
          },
          mx: "auto",    pb: { xs: 2, md: 6 },
        }}
      >
        <MiniNav
        color={project.color}
        demoUrl={project.demoUrl}
        githubUrl={project.githubUrl}
      />
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProjectTechStack
          role={project.role}
          technologies={project.technologies}
        />

        <Footer />
      </Box>
    </Box>
  );
}

export default ProjectDetail;
