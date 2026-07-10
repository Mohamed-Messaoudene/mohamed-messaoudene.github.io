import { Box, Button, Typography, useTheme } from "@mui/material";
import { HomeRounded, ArrowBackRounded } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: theme.palette.background.bgcolor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
      }}
    >
      {/* Background Blur */}
      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: `${theme.palette.primary.main}22`,
          filter: "blur(120px)",
          top: -120,
          left: -120,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `${theme.palette.secondary.main}22`,
          filter: "blur(120px)",
          bottom: -120,
          right: -120,
        }}
      />

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          textAlign: "center",
          maxWidth: 700,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Animated 404 */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "6rem",
                sm: "8rem",
                md: "10rem",
              },
              fontWeight: 900,
              lineHeight: 1,
              background: `linear-gradient(135deg,
                ${theme.palette.primary.main},
                ${theme.palette.secondary.main}
              )`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </Typography>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mt: 2,
              fontWeight: 700,
              color: theme.palette.primary.text,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Oops! Page Not Found
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.55,
            duration: 0.6,
          }}
        >
          <Typography
            sx={{
              mt: 3,
              color: "text.secondary",
              lineHeight: 1.8,
              fontSize: {
                xs: "1rem",
                md: "1.15rem",
              },
            }}
          >
            {"The page you're looking for doesn't exist, may have been moved,or the URL might be incorrect."}
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "text.secondary",
            }}
          >
            {"Let's get you back on track."}
          </Typography>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              mt: 5,
            }}
          >
            <Button
              component={Link}
              to="/"
              variant="contained"
              startIcon={<HomeRounded />}
              sx={{
                px: 4,
                py: 1.3,
                borderRadius: 100,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Back to Home
            </Button>

            <Button
              variant="outlined"
              startIcon={<ArrowBackRounded />}
              onClick={() => navigate(-1)}
              sx={{
                px: 4,
                py: 1.3,
                borderRadius: 100,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Go Back
            </Button>
          </Box>
        </motion.div>

        {/* Decorative floating dots */}
        <Box
          component={motion.div}
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            inset: -60,
            pointerEvents: "none",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: theme.palette.primary.main,
                opacity: 0.35,
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default NotFound;