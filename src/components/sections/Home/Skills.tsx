import CustomDevider from "../../CustomDevider";
import { Box, Typography, useTheme, Chip, Divider, alpha } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { languages, skillCategories } from "../../../constants";
import CategoryRow from "../../CategoryRow";



function Skills() {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box
      id="skills"
      ref={ref}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingBlock={6}
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

      <Box sx={{ width: "100%", mt: 2 }}>
        {skillCategories.map((category, index) => (
          <Box key={category.title}>
            <CategoryRow category={category} index={index} inView={inView} />
            {index < skillCategories.length - 1 && (
              <Divider
                sx={{ borderColor: alpha(theme.palette.divider, 0.6) }}
              />
            )}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          width: "100%",
          mt: 4,
          pt: 4,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 1.5, md: 4 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "200px" },
              flexShrink: 0,
              borderLeft: {
                xs: "none",
                md: `3px solid ${theme.palette.primary.main}`,
              },
              pl: { xs: 0, md: 2 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "clamp(14px,1.6vw,18px)",
                color: theme.palette.primary.text,
              }}
            >
              Languages
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, flex: 1 }}>
            {languages.map((lang) => (
              <Chip
                key={lang.name}
                label={`${lang.name} — ${lang.level}`}
                size="small"
                sx={{
                  fontWeight: 600,
                  fontSize: "clamp(10px,1.1vw,13px)",
                  bgcolor: theme.palette.primary.main,
                  color: "white",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;
