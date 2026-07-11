// Two syntax palettes, loosely modeled on VS Code's Dark+ / Light+
// themes, so the code panel actually respects the site's mode toggle

import { alpha, Box, useTheme,Typography } from "@mui/material";
import { motion } from "framer-motion";


const bioBefore =
  "I'm Mohamed Messaoudene, a full-stack developer based in Medea, Algeria, specializing in React, TypeScript, and Laravel. After graduating as an ICT Engineer from ";

const bioAfter =
  " in June 2025, I worked remotely as a frontend contractor for GamifierSA in Saudi Arabia, delivering production applications—from multilingual healthcare platforms to B2B/B2C marketplaces—for international clients. That contract has since ended, and I'm now focused on new freelance projects and full-time opportunities where I can bring that same experience to a team.";


// instead of always forcing a dark editor look.
function useCodeColors(mode) {
  return mode === "dark"
    ? {
        bg: "#1e1e2e",
        chromeBorder: "rgba(255,255,255,0.08)",
        filename: "rgba(255,255,255,0.5)",
        comment: "#6a9955",
        keyword: "#569cd6",
        variable: "#4fc1ff",
        key: "#9cdcfe",
        string: "#ce9178",
        punctuation: "#d4d4d4",
        bioText: "#dcd7ce",
        bioBg: alpha("#ce9178", 0.08),
      }
    : {
        bg: "#fafafa",
        chromeBorder: "rgba(0,0,0,0.08)",
        filename: "rgba(0,0,0,0.45)",
        comment: "#008000",
        keyword: "#0000ff",
        variable: "#267f99",
        key: "#001080",
        string: "#a31515",
        punctuation: "#1e1e1e",
        bioText: "#3b3b3b",
        bioBg: alpha("#a31515", 0.05),
      };
}

function TerminalCard({ inView }) {
  const theme = useTheme();
  const c = useCodeColors(theme.palette.mode);

  return (
    <Box
      sx={{
        bgcolor: c.bg,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: theme.palette.mode === "dark"
          ? "0 12px 32px rgba(0,0,0,0.35)"
          : "0 12px 32px rgba(0,0,0,0.12)",
        border: theme.palette.mode === "dark" ? "none" : `1px solid ${c.chromeBorder}`,
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
          borderBottom: `1px solid ${c.chromeBorder}`,
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
            color: c.filename,
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
        <Box sx={{ color: c.comment, mb: 0.5 }}>{"// developer profile"}</Box>
        <Box>
          <span style={{ color: c.keyword }}>const</span>{" "}
          <span style={{ color: c.variable }}>developer</span>{" "}
          <span style={{ color: c.punctuation }}>= {"{"}</span>
        </Box>

        <Box sx={{ pl: 2.5 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <Box sx={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
              <span style={{ color: c.key }}>bio</span>
              <span style={{ color: c.punctuation }}>:</span>
              <span style={{ color: c.string }}>`</span>
            </Box>

            <Box
              sx={{
                my: 1,
                ml: { xs: 0, sm: 1 },
                pl: 2,
                pr: 2,
                py: 1.8,
                borderLeft: `3px solid ${c.string}`,
                bgcolor: c.bioBg,
                borderRadius: "0 8px 8px 0",
              }}
            >
              <Typography
  component="span"
  sx={{
    fontFamily: '"Fira Code", "Courier New", monospace',
    fontSize: "clamp(11px,1.25vw,14.5px)",
    lineHeight: 1.9,
    color: c.bioText,
  }}
>
  {bioBefore}

  <Box
    component="a"
    href="https://www.ensttic.dz/"
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      color: c.variable,
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
              <span style={{ color: c.string }}>`</span>
            </Box>
          </motion.div>
        </Box>

        <Box sx={{ color: c.punctuation }}>{"};"}</Box>
      </Box>
    </Box>
  );
}

export default TerminalCard;