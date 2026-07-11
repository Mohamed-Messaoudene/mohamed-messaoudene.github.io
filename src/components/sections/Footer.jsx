"use client";

import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Fab,
  useTheme,
} from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Article,
} from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <LinkedInIcon sx={{ fontSize: "clamp(16px,1.2vw,28px)" }} />,
      href: "https://www.linkedin.com/in/mohamed-messaoudene-ab595a269",
      name: "LinkedIn",
    },
    {
      icon: <GitHubIcon sx={{ fontSize: "clamp(16px,1.2vw,28px)" }} />,
      href: "https://github.com/Mohamed-Messaoudene",
      name: "GitHub",
    },
    {
      // <TwitterIcon sx={{ fontSize: "clamp(16px,1.2vw,28px)" }}
      icon: <Article sx={{ fontSize: "clamp(16px,1.2vw,28px)" }} />,
      href: "https://medium.com/@mohamed.messaoudene_67018",
      name: "Medium",
    },
    {
      icon: <InstagramIcon sx={{ fontSize: "clamp(18px,1.2vw,28px)" }} />,
      href: "https://www.instagram.com/messaoudene691/",
      name: "Instagram",
    },
  ];

  return (
    <Box
      component="footer"
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent={{ xs: "center", sm: "space-between" }}
      alignItems={"center"}
      paddingBlock={3}
      sx={{
        position: "relative",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "clamp(120px,30vw,200px)",
          position: "relative",
          mb: 4,
        }}
      >
        <img
          src={
            theme.palette.mode == "light"
              ? "/messaoudene-high-resolution-logo-transparent (light).svg"
              : "/messaoudene-high-resolution-logo-transparent (dark).svg"
          }
          alt="logo"
          style={{
            objectFit: "contain",
            width: "100%",
            position: "absolute",
            left: "-40%",
          }}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{
            marginLeft: 5,
            fontSize: "clamp(16px,1.7vw,24px)",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #3f51b5 30%,#ba68c8 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Messaoudene
        </Typography>
      </Box>

      {/* Contact Information & Social Media */}
      <Box display="flex" flexDirection="column" alignItems={"center"} gap={1}>
        <Box display="flex" alignItems="center" gap={1}>
          <EmailIcon
            sx={{ color: theme.palette.primary.text, fontSize: "16px" }}
          />
          <Typography
            variant="body2"
            fontSize={"clamp(9px,1.1vw,17px)"}
            color={theme.palette.primary.text}
          >
            messaoudenemohamed54@gmail.com
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <PhoneIcon
            sx={{ color: theme.palette.primary.text, fontSize: "16px" }}
          />
          <Typography
            variant="body2"
            fontSize={"clamp(10px,1.1vw,17px)"}
            color={theme.palette.primary.text}
          >
            +213 776 26 84 40
          </Typography>
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          {socialLinks.map((social) => (
            <motion.div
              key={social.name}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Tooltip title={social.name}>
                <IconButton
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{
                    color: theme.palette.primary.main,
                    "&:hover": {
                      bgcolor: theme.palette.background.bgcolor2,
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Footer Text (Placed in the same row) */}
      <Box
        display="flex"
        flexDirection={{ xs: "column" }}
        alignItems="center"
        gap={2}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "clamp(10px,1.2vw,16px)",
            color: theme.palette.primary.text,
            textAlign: "center",
          }}
        >
          © {currentYear} messaoudene mohamed. All rights reserved.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: "clamp(10px,1.2vw,16px)",
            color: theme.palette.primary.text,
            textAlign: "center",
          }}
        >
          Designed & Built with ❤️ using React & Material UI
        </Typography>
      </Box>
      {/* Back to top button */}
      <Fab
        size="small"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: "absolute",
          right: { xs: 10, sm: 20 }, // Adjust position based on screen size
          top: { xs: -14, sm: -20 },
          bgcolor: theme.palette.primary.main,
          color: "white",
          width: { xs: 30, sm: 40 }, // Smaller size on small screens
          height: { xs: 30, sm: 40 },
          minHeight: { xs: 30, sm: 40 }, // Ensures Fab doesn't shrink further
          "& svg": {
            fontSize: { xs: 16, sm: 24 }, // Adjust icon size
          },
          "&:hover": {
            bgcolor: theme.palette.primary.dark,
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
}
