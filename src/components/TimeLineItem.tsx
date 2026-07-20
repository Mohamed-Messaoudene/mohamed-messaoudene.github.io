import {
  Box,
  Typography,
  Paper,
  Chip,
  useTheme,
  Stack,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Work as WorkIcon,
  School as SchoolIcon,
  LocationOn as LocationOnIcon,
  CalendarMonth as CalendarMonthIcon,
  ExpandMore,
  ExpandLess,
  CheckCircleRounded,
} from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { Experience } from "../types";

type TimelineItemProps = {
  item: Experience;
  index: number;
  isLast: boolean;
  inView: boolean;
  nextColor: string;
}

function TimelineItem({ item, index, isLast, inView, nextColor }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const Icon = item.type === "education" ? SchoolIcon : WorkIcon;
  const fromLeft = index % 2 === 0;

  return (
    <Box sx={{ display: "flex", width: "100%"}}>
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
          elevation={1}
          
          sx={{
            bgcolor: theme.palette.background.bgcolor,
            p: "clamp(12px,2vw,24px)",
            borderLeft: `4px solid ${item.color}`,
            transition: ".3s",
            marginRight:1,

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
                label={item.type === "education" ? "Education" : "Experience"}
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
                  fontSize: "clamp(13px,2vw,22px)",
                }}
              >
                {item.org}
              </Typography>
            </Box>

            <Chip
              icon={<CalendarMonthIcon sx={{fontSize:{xs:'16px',md:'22px'}}} />}
              label={item.duration}
              sx={{
                fontSize: "clamp(11px,2vw,16px)",
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

            <Typography
              color="text.secondary"
              sx={{ fontSize: "clamp(12px,2vw,18px)" }}
            >
              {item.location}
            </Typography>
          </Box>

          <Collapse in={expanded} timeout={350}>
            {item.type === "education" ? (
              <>
                <Typography
                  sx={{
                    mb: 1.5,
                    color: "text.secondary",
                    fontSize: "clamp(12px,1.8vw,18px)",
                  }}
                >
                  {item.description}
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {item.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" />
                  ))}
                </Stack>
              </>
            ) : (
              <Stack spacing={1.5}>
                {item.contributions.map((point) => (
                  <Box
                    key={point}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1,
                    }}
                  >
                    <CheckCircleRounded
                      sx={{
                        color: item.color,
                        fontSize: { xs: 12, md: 22 },
                        mt: "3px",
                      }}
                    />

                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "clamp(11px,1.8vw,18px)",
                      }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            )}
          </Collapse>
          <Button
            onClick={() => setExpanded((prev) => !prev)}
            endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
            sx={{
              mt: 2,
              p: 0,
              textTransform: "none",
              fontWeight: 600,
              color: item.color,

              "&:hover": {
                background: "transparent",
                opacity: 0.85,
              },
            }}
          >
            {expanded
              ? "Show less"
              : item.type === "experience"
                ? "View achievements"
                : "View coursework"}
          </Button>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default TimelineItem;
