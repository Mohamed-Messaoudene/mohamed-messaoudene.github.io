import CustomDevider from "../CustomDevider";
import { Box, Typography, useTheme, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Work as WorkIcon,
  School as SchoolIcon,
  LocationOn as LocationOnIcon,
  CalendarMonth as CalendarMonthIcon,
} from "@mui/icons-material";
import { timelineData } from "../../constants";


function TimelineItem({ item, index, isLast, inView }) {
  const theme = useTheme();
  const Icon = item.type === "education" ? SchoolIcon : WorkIcon;
  const fromLeft = index % 2 === 0; // alternate entry direction for visual rhythm

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      {/* Rail: dot + connecting line */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mr: { xs: 2, md: 3 },
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: 30, md: 38 },
              height: { xs: 30, md: 38 },
              borderRadius: "50%",
              bgcolor: item.color,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              mt: 1,
              boxShadow: `0 0 0 4px ${theme.palette.background.paper}, 0 0 0 5px ${item.color}55`,
            }}
          >
            <Icon sx={{ fontSize: "clamp(14px,2vw,20px)" }} />
          </Box>
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            style={{
              width: "2px",
              flexGrow: 1,
              transformOrigin: "top",
              background: `linear-gradient(${item.color}, ${
                timelineData[index + 1]?.color || item.color
              })`,
              marginTop: "4px",
            }}
          />
        )}
      </Box>

      {/* Content card */}
      <motion.div
        style={{ width: "100%", marginBottom: "36px" }}
        initial={{ opacity: 0, x: fromLeft ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: "clamp(12px, 2vw, 24px)",
            width: "100%",
            borderLeft: `4px solid ${item.color}`,
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: theme.shadows[10],
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 1,
              mb: 1,
            }}
          >
            <Box>
              <Chip
                label={item.type === "education" ? "Education" : "Experience"}
                size="small"
                sx={{
                  fontSize: "clamp(8px,1vw,11px)",
                  fontWeight: "bold",
                  bgcolor: `${item.color}22`,
                  color: item.color,
                  mb: 0.7,
                }}
              />
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "clamp(13px,2vw,22px)",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "clamp(11px,1.5vw,16px)",
                  color: item.color,
                  fontWeight: 600,
                }}
              >
                {item.org}
              </Typography>
            </Box>
            <Chip
              icon={<CalendarMonthIcon sx={{ fontSize: "16px !important" }} />}
              label={item.duration}
              size="small"
              sx={{
                fontSize: "clamp(9px,1.2vw,13px)",
                fontWeight: "bold",
                bgcolor: item.color,
                color: "white",
                "& .MuiChip-icon": { color: "white" },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 1.5 }}>
            <LocationOnIcon
              sx={{ fontSize: "clamp(12px,1.5vw,18px)", color: "text.secondary" }}
            />
            <Typography
              sx={{ fontSize: "clamp(10px,1.3vw,14px)", color: "text.secondary" }}
            >
              {item.location}
            </Typography>
          </Box>

          {item.type === "education" ? (
            <>
              <Typography
                sx={{
                  fontSize: "clamp(10px,1.3vw,15px)",
                  color: "text.secondary",
                  mb: 1.5,
                  lineHeight: 1.5,
                }}
              >
                {item.description}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {item.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{ fontSize: "clamp(9px,1.1vw,13px)" }}
                  />
                ))}
              </Box>
            </>
          ) : (
            <Box component="ul" sx={{ m: 0, pl: "1.1em" }}>
              {item.contributions.map((point, i) => (
                <Typography
                  key={i}
                  component="li"
                  sx={{
                    fontSize: "clamp(10px,1.3vw,15px)",
                    color: "text.secondary",
                    mb: 0.8,
                    lineHeight: 1.5,
                  }}
                >
                  {point}
                </Typography>
              ))}
            </Box>
          )}
        </Paper>
      </motion.div>
    </Box>
  );
}

function Experience() {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box
      id="experience"
      ref={ref}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingBlock={3}
      paddingInline={{ xs: "clamp(6px,8vw,30px)", md: "60px", lg: "200px" }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "clamp(18px, 3vw, 40px)",
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
            isLast={index === timelineData.length - 1}
            inView={inView}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Experience;