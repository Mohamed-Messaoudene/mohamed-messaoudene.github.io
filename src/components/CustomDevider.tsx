import { Box, Divider, useTheme } from "@mui/material";

function CustomDevider() {
  const theme = useTheme();

  return (
    <>
      {/* Divider with Circles */}
      <Box
        sx={{
          position: "relative",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Center content properly
          width: { xs: "20px", md: "100px" }, // ✅ Control width using Box, not Divider
        }}
      >
        {/* Left Circle */}
        <Box
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.text,
            position: "absolute",
            left: "-15px",
          }}
        />

        {/* Divider inside Box */}
        <Divider
          sx={{
            width: "100%", // ✅ Make Divider take full width of its parent (Box)
            height: "2px",
            backgroundColor: theme.palette.primary.main,
          }}
        />

        {/* Right Circle */}
        <Box
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.text,
            position: "absolute",
            right: "-15px",
          }}
        />
      </Box>
    </>
  );
}

export default CustomDevider;
