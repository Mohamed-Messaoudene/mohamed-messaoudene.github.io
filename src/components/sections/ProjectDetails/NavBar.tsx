import { Box, Button } from "@mui/material";
import { useCustomTheme } from "../../../context/themeContext";
import { Link as RouterLink } from "react-router-dom";

import { Stack, IconButton, Tooltip } from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

type MiniNavProps = {
  color: string;
  demoUrl: string | null;
  githubUrl: string | null;
};

function MiniNav({ color, demoUrl, githubUrl }: MiniNavProps) {
  const { mode, toggleTheme } = useCustomTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: (theme) => theme.zIndex.appBar,

        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",

        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,

        transition: "all .3s ease",
      }}
    >
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: 2,

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Back */}

        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            color: "text.secondary",

            "&:hover": {
              color,
              bgcolor: "transparent",
            },
          }}
        >
          Back to Home
        </Button>

        {/* Actions */}

        <Stack direction="row" spacing={{ xs: 1, sm: 2 }} alignItems="center">
          {demoUrl && (
            <Tooltip title="Live Demo">
              <IconButton
                component="a"
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  transition: ".25s",

                  "&:hover": {
                    color,
                    borderColor: color,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <LaunchIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
              </IconButton>
            </Tooltip>
          )}

          {githubUrl && (
            <Tooltip title="GitHub Repository">
              <IconButton
                component="a"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  transition: ".25s",

                  "&:hover": {
                    color,
                    borderColor: color,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
              </IconButton>
            </Tooltip>
          )}

          <Tooltip title={mode === "dark" ? "Light Mode" : "Dark Mode"}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                border: (theme) => `1px solid ${theme.palette.divider}`,
                transition: ".25s",

                "&:hover": {
                  color,
                  borderColor: color,
                  transform: "translateY(-2px)",
                },
              }}
            >
              {mode === "dark" ? (
                <LightModeRoundedIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
              ) : (
                <DarkModeRoundedIcon sx={{ fontSize: { xs: 14, md: 18 } }} />
              )}
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
    </Box>
  );
}

export default MiniNav;
