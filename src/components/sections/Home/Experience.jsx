import { Box, Typography, useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";


import { timelineData } from "../../../constants";
import CustomDevider from "../../CustomDevider";
import TimelineItem from "../../TimeLineItem";

function Experience() {
  const theme = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      id="experience"
      ref={ref}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingBlock={3}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "clamp(18px,3vw,40px)",
          color: theme.palette.primary.text,
        }}
      >
        My <span style={{ color: theme.palette.primary.main }}>Journey</span>
      </Typography>

      <CustomDevider />

      <Box sx={{ width: "100%", mt: 4 }}>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={`${item.org}-${item.title}`}
            item={item}
            index={index}
            inView={inView}
            isLast={index === timelineData.length - 1}
            nextColor={timelineData[index + 1]?.color || item.color}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Experience;