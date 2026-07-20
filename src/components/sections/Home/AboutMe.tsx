import { Box, useTheme, Typography } from "@mui/material";
import CustomDevider from "../../CustomDevider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TerminalCard from "../../TerminalCard";

function AboutMe() {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <Box
      id="about"
      ref={ref}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginBlock="30px"
    >
      <Typography
        variant="h4"
        color={theme.palette.primary.text}
        sx={{ fontSize: "clamp(18px, 3vw, 40px)" }}
      >
        About <span style={{ color: theme.palette.primary.main }}>Me</span>
      </Typography>
      <CustomDevider />

      <Box sx={{ width: "100%", mt: 4, display: "flex", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <TerminalCard inView={inView} />
        </motion.div>
      </Box>

    </Box>
  );
}

export default AboutMe;