import { Box, useTheme, Typography } from "@mui/material";
import { motion } from "framer-motion";

const bioBefore =
  "I'm Mohamed Messaoudene, a full-stack developer based in Medea, Algeria, specializing in React, TypeScript, and Laravel. After graduating as an ICT Engineer from ";

const bioAfter =
  " in June 2025, I worked remotely as a frontend contractor for GamifierSA in Saudi Arabia, delivering production applications—from multilingual healthcare platforms to B2B/B2C marketplaces—for international clients. That contract has since ended, and I'm now focused on new freelance projects and full-time opportunities where I can bring that same experience to a team.";

function TerminalCard({ inView }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.code.bg,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 12px 32px rgba(0,0,0,0.35)"
            : "0 12px 32px rgba(0,0,0,0.12)",
        border:
          theme.palette.mode === "dark"
            ? "none"
            : `1px solid ${theme.palette.code.chromeBorder}`,
        fontFamily: '"Fira Code", "Courier New", monospace',
        width: "100%",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Window chrome */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.8,
          px: 2,
          py: 1.2,
          borderBottom: `1px solid ${theme.palette.code.chromeBorder}`,
        }}
      >
        {["#ff5f56", "#ffbd2e", "#27c93f"].map((dot) => (
          <Box
            key={dot}
            sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: dot }}
          />
        ))}
        <Typography
          sx={{
            ml: 1.5,
            fontSize: "clamp(10px,1.1vw,13px)",
            color: theme.palette.code.filename,
            fontFamily: '"Fira Code", "Courier New", monospace',
          }}
        >
          profile.js
        </Typography>
      </Box>

      {/* Code body — bio only */}
      <Box
        sx={{
          p: "clamp(16px, 2.5vw, 28px)",
          fontSize: "clamp(11px,1.3vw,15px)",
          lineHeight: 2,
        }}
      >
        <Box sx={{ color: theme.palette.code.comment, mb: 0.5 }}>
          {"// developer profile"}
        </Box>
        <Box>
          <span style={{ color: theme.palette.code.keyword }}>const</span>{" "}
          <span style={{ color: theme.palette.code.variable }}>developer</span>{" "}
          <span style={{ color: theme.palette.code.punctuation }}>= {"{"}</span>
        </Box>

        <Box sx={{ pl: 2.5 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <Box sx={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
              <span style={{ color: theme.palette.code.key }}>bio</span>
              <span style={{ color: theme.palette.code.punctuation }}>:</span>
              <span style={{ color: theme.palette.code.string }}>`</span>
            </Box>

            <Box
              sx={{
                my: 1,
                ml: { xs: 0, sm: 1 },
                pl: 2,
                pr: 2,
                py: 1.8,
                borderLeft: `3px solid ${theme.palette.code.string}`,
                bgcolor: theme.palette.code.bioBg,
                borderRadius: "0 8px 8px 0",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: '"Fira Code", "Courier New", monospace',
                  fontSize: "clamp(11px,1.25vw,14.5px)",
                  lineHeight: 1.9,
                  color: theme.palette.code.bioText,
                }}
              >
                {bioBefore}

                <Box
                  component="a"
                  href="https://www.ensttic.dz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: theme.palette.code.variable,
                    fontWeight: 700,
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  ENSTTIC
                </Box>

                {bioAfter}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
              <span style={{ color: theme.palette.code.string }}>`</span>
            </Box>
          </motion.div>
        </Box>

        <Box sx={{ color: theme.palette.code.punctuation }}>{"};"}</Box>
      </Box>
    </Box>
  );
}

export default TerminalCard;
