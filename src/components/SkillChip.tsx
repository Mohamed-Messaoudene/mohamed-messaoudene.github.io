import { alpha, Chip } from "@mui/material";
import { Skill } from "../types";

type SkillChipProps = {
  skill: Skill;
  categoryColor: string;
}

function SkillChip({ skill, categoryColor }: SkillChipProps) {
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

export default SkillChip;