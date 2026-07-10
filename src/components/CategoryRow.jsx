import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import SkillChip from "./SkillChip";
import PropTypes from "prop-types";

function CategoryRow({ category, index, inView }) {
  const theme = useTheme();

  const CategoryIcon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: 1.5, md: 4 },
          py: { xs: 2.5, md: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            width: { xs: "100%", md: "200px" },
            flexShrink: 0,
            borderLeft: { xs: "none", md: `3px solid ${category.color}` },
            pl: { xs: 0, md: 2 },
          }}
        >
          <CategoryIcon
            sx={{
              fontSize: "clamp(16px,2vw,26px)",
              color: category.color,
            }}
          />

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "clamp(14px,1.6vw,18px)",
              color: theme.palette.primary.text,
            }}
          >
            {category.title}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, flex: 1 }}>
          {category.skills.map((skill) => (
            <SkillChip
              key={skill.name}
              skill={skill}
              categoryColor={category.color}
            />
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

CategoryRow.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
        core: PropTypes.bool,
      }),
    ).isRequired,
  }).isRequired,

  index: PropTypes.number.isRequired,
  inView: PropTypes.bool.isRequired,
};

export default CategoryRow;
