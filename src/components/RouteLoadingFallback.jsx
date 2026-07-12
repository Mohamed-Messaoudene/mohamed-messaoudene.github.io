import { Box, CircularProgress, useTheme } from "@mui/material";

function RouteLoadingFallback() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.bgcolor,
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

export default RouteLoadingFallback;