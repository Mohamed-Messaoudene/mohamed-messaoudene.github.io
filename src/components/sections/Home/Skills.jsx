import CustomDevider from "../../CustomDevider";
import { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Paper,
  Grid,
  Chip,
  LinearProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Language as LanguageIcon,
  Terminal as TerminalIcon,
} from "@mui/icons-material";

function Skills() {
  const theme = useTheme();
  const [expandedCards, setExpandedCards] = useState([]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  const toggleCard = (title) => {
    setExpandedCards((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <LanguageIcon sx={{ fontSize: "clamp(16px,2.2vw,45px)" }} />,
      color: "#3f51b5",
      skills: [
        {
          name: "React",
          level: 90,
          description: "Component-based UI development,Material ui",
        },
        {
          name: "JavaScript",
          level: 85,
          description: "ES6+, functional programming",
        },
        {
          name: "HTML/CSS",
          level: 80,
          description: "Semantic HTML, CSS3, Responsive design",
        },
        {
          name: "Tailwind CSS",
          level: 86,
          description: "Utility-first CSS framework",
        },
      ],
    },
    {
      title: "Backend",
      icon: <CodeIcon sx={{ fontSize: "clamp(16px,2.2vw,45px)" }} />,
      color: "#4caf50",
      skills: [
        {
          name: "Node.js",
          level: 85,
          description: "Server-side JavaScript runtime",
        },
        {
          name: "Express",
          level: 80,
          description: "Web application framework",
        },
        { name: "Laravel", level: 70, description: "PHP framework" },
        { name: "REST APIs", level: 85, description: "RESTful service design" },
      ],
    },
    {
      title: "Databases",
      icon: <StorageIcon sx={{ fontSize: "clamp(16px,2.2vw,45px)" }} />,
      color: "#ff9800",
      skills: [
        {
          name: "MongoDB",
          level: 80,
          description: "NoSQL document-oriented database",
        },
        {
          name: "PostgreSQL,MySQL",
          level: 75,
          description: "Relational database management system (RDBMS)",
        },
        {
          name: "Redis",
          level: 60,
          description:
            "In-memory key-value data store for caching and real-time applications",
        },
        {
          name: "SQL & ORMs",
          level: 70,
          description:
            "Structured Query Language with Object-Relational Mappers (Sequelize, Mongoose)",
        },
      ],
    },
    {
      title: "Other",
      icon: <TerminalIcon sx={{ fontSize: "clamp(16px,2.2vw,45px)" }} />,
      color: "#607d8b",
      skills: [
        {
          name: "Git/GitHub",
          level: 80,
          description: "Version control and repository management",
        },
        {
          name: "Linux",
          level: 60,
          description: "Command-line, server administration",
        },
        {
          name: "Authentication (OAuth, JWT, Sessions)",
          level: 70,
          description: "User authentication and security",
        },
        {
          name: "Docker",
          level: 60,
          description: "Containerization platform",
        },
      ],
    },
  ];

  return (
    <Box
      id="skills"
      ref={ref}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingBlock={3}
      paddingInline={{ xs: "clamp(6px,8vw,30px)", md: "60px" ,lg:'200px'}}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "clamp(18px, 3vw, 40px)",
          color: theme.palette.primary.text,
        }}
      >
        My <span style={{ color: theme.palette.primary.main }}>Skills</span>
      </Typography>
      <CustomDevider />
      <Grid container spacing={4} marginTop={2}>
        {skillCategories.map((category) => (
          <Grid item xs={12} sm={6} key={category.title}>
            <motion.div
              initial={{ opacity: 0, y: 40, x: 40 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: "clamp(8px,1vw,16px)",
                  cursor: "pointer",
                  height: "100%",
                  overflowX: "hidden",
                  borderTop: `4px solid ${category.color}`,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[10],
                  },
                }}
                onClick={() => toggleCard(category.title)}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      color: "white",
                      bgcolor: category.color,
                      borderRadius: "50%",
                      p: 0.6,
                      mr: 2,
                      display: "flex",
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "clamp(14px,2vw,25px)",
                    }}
                    variant="h5"
                    component="h3"
                  >
                    {category.title}
                  </Typography>
                </Box>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    expandedCards.includes(category.title)
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <Box sx={{ mt: 3 }}>
                    {category.skills.map((skill) => (
                      <Box key={skill.name} sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 0.5,
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "medium",
                              fontSize: "clamp(11px,1.4vw,18px)",
                            }}
                            variant="body1"
                          >
                            {skill.name}
                          </Typography>
                          <Chip
                            label={`${skill.level}%`}
                            size="small"
                            sx={{
                              fontSize: "clamp(8px,1.4vw,16px)",
                              bgcolor: category.color,
                              color: "white",
                              fontWeight: "bold",
                            }}
                          />
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 },
                            borderRadius: 5,
                            mb: 0.5,
                            bgcolor: theme.palette.grey[200],
                            "& .MuiLinearProgress-bar": {
                              bgcolor: category.color,
                              borderRadius: 5,
                            },
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            fontSize: "clamp(9px,1vw,14px)",
                          }}
                        >
                          {skill.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          width: "100%",
          mt: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "clamp(16px, 2vw, 30px)",
            fontWeight: "bold",
            color: theme.palette.primary.text,
            mb: 2,
          }}
        >
          Languages & Proficiency
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {[
            { name: "Arabic", level: "Native" },
            { name: "English", level: "good" },
            { name: "French", level: "Intermediate" },
          ].map((lang) => (
            <Chip
              key={lang.name}
              label={`${lang.name} - ${lang.level}`}
              sx={{
                fontSize: "clamp(8px,1.7vw,18px)",
                fontWeight: "bold",
                padding: { xs: "2px 5px", sm: "8px 12px" },
                bgcolor: theme.palette.primary.main,
                color: "white",
                borderRadius: "20px",
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
export default Skills;
