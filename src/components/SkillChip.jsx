import { alpha, Chip } from "@mui/material";
import PropTypes from "prop-types";

function SkillChip({ skill, categoryColor }) {
  const Icon = skill.icon;
  return (
    <Chip
      icon={
        <Icon
          style={{
            fontSize: 15,
            color: skill.core ? "#fff" : categoryColor,
          }}
        />
      }
      label={skill.name}
      size="small"
      sx={{
        fontWeight: 600,
        fontSize: "clamp(10px,1.1vw,13px)",
        bgcolor: skill.core ? categoryColor : alpha(categoryColor, 0.1),
        color: skill.core ? "#fff" : categoryColor,
        border: skill.core ? "none" : `1px solid ${alpha(categoryColor, 0.35)}`,
      }}
    />
  );
}


SkillChip.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    core: PropTypes.bool,
  }).isRequired,

  categoryColor: PropTypes.string.isRequired,
};

export default SkillChip;