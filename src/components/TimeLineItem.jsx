import PropTypes from "prop-types";
import { Box, Typography, Paper, Chip, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import {
  Work as WorkIcon,
  School as SchoolIcon,
  LocationOn as LocationOnIcon,
  CalendarMonth as CalendarMonthIcon,
} from "@mui/icons-material";

function TimelineItem({ item, index, isLast, inView, nextColor }) {
  const theme = useTheme();

  const Icon = item.type === "education" ? SchoolIcon : WorkIcon;
  const fromLeft = index % 2 === 0;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      {/* Timeline rail */}
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
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 1,
              flexShrink: 0,
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
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 0.2,
            }}
            style={{
              width: 2,
              flexGrow: 1,
              marginTop: 4,
              transformOrigin: "top",
              background: `linear-gradient(${item.color}, ${nextColor})`,
            }}
          />
        )}
      </Box>

      {/* Card */}
      <motion.div
        style={{ width: "100%", marginBottom: 36 }}
        initial={{ opacity: 0, x: fromLeft ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: "clamp(12px,2vw,24px)",
            borderLeft: `4px solid ${item.color}`,
            transition: ".3s",

            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: theme.shadows[10],
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 1,
              mb: 1,
            }}
          >
            <Box>
              <Chip
                label={
                  item.type === "education" ? "Education" : "Experience"
                }
                size="small"
                sx={{
                  bgcolor: `${item.color}22`,
                  color: item.color,
                  fontWeight: 700,
                  mb: 0.7,
                }}
              />

              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "clamp(13px,2vw,22px)",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: item.color,
                  fontWeight: 600,
                }}
              >
                {item.org}
              </Typography>
            </Box>

            <Chip
              icon={<CalendarMonthIcon />}
              label={item.duration}
              size="small"
              sx={{
                bgcolor: item.color,
                color: "#fff",

                "& .MuiChip-icon": {
                  color: "#fff",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mb: 1.5,
            }}
          >
            <LocationOnIcon fontSize="small" color="action" />

            <Typography color="text.secondary">
              {item.location}
            </Typography>
          </Box>

          {item.type === "education" ? (
            <>
              <Typography
                sx={{
                  mb: 1.5,
                  color: "text.secondary",
                }}
              >
                {item.description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {item.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </Box>
            </>
          ) : (
            <Box component="ul" sx={{ m: 0, pl: "1.2rem" }}>
              {item.contributions.map((point) => (
                <Typography
                  key={point}
                  component="li"
                  sx={{
                    mb: 0.8,
                    color: "text.secondary",
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

TimelineItem.propTypes = {
  index: PropTypes.number.isRequired,
  isLast: PropTypes.bool.isRequired,
  inView: PropTypes.bool.isRequired,
  nextColor: PropTypes.string.isRequired,

  item: PropTypes.shape({
    type: PropTypes.oneOf(["education", "experience"]).isRequired,
    title: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,

    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),

    contributions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default TimelineItem;