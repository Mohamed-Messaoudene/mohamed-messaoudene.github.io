import { useState, useEffect } from "react";
import {
  ListItemIcon,
  IconButton,
  Box,
  Toolbar,
  useTheme,
  Button,
  Tooltip,
  MenuItem,
  Collapse,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useCustomTheme } from "../context/themeContext";
import { Home, LightMode } from "@mui/icons-material";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  {
    title: "home",
    label: "Home",
    icon: <Home fontSize="small" />,
  },
  {
    title: "experience",
    label: "Journey",
    icon: <WorkIcon fontSize="small" />,
  },
  {
    title: "projects",
    label: "Projects",
    icon: <WorkIcon fontSize="small" />,
  },
  {
    title: "skills",
    label: "Skills",
    icon: <CodeIcon fontSize="small" />,
  },
  {
    title: "about",
    label: "About",
    icon: <PersonIcon fontSize="small" />,
  },
  {
    title: "contact",
    label: "Contact",
    icon: <ContactMailIcon fontSize="small" />,
  },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState(null);
  const { mode, toggleTheme } = useCustomTheme();
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.title),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);

    if (element) {
      const navbarHeight = 60; // Adjust this based on your navbar's actual height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarHeight - 10, // Add some extra space for better visibility
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Box>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          height: 80,
          zIndex: 1201,
          paddingInline: { xs: 1, sm: 2, md: "50px", lg: "70px", xl: "160px" },
          transition: "all 0.3s ease-in-out",
          boxShadow: isScrolled ? "0px 4px 12px rgba(0, 0, 0, 0.2)" : "none",
          backdropFilter: isScrolled ? "blur(15px)" : "none",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: { xs: "150px", sm: "180px", md: "200px", lg: "230px" },
              overflow: "hidden",
              position: "relative",
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
                left: "50%",
                transform: "translateX(-85%)",
              }}
            />
            <IconButton
              onClick={toggleTheme}
              color={theme.palette.primary.text}
              sx={{ marginLeft: { xs: "60px", sm: "80px", md: "100px" } }}
            >
              {mode === "dark" ? (
                <DarkModeIcon sx={{ fontSize: { xs: "20px", sm: "27px" } }} />
              ) : (
                <LightMode sx={{ fontSize: { xs: "20px", sm: "27px" } }} />
              )}
            </IconButton>
          </Box>
        </Box>

        <Tooltip title="Menu">
          <IconButton
            onClick={handleMenuToggle}
            sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}
          >
            {menuOpen ? (
              <MenuOpenIcon sx={{ fontSize: "clamp(20px,4vw,28px)" }} />
            ) : (
              <MenuIcon sx={{ fontSize: "clamp(20px,4vw,28px)" }} />
            )}
          </IconButton>
        </Tooltip>

        <Box
          sx={{ display: { xs: "none", sm: "flex" }, gap: { xs: 2, md: 4 } }}
        >
          {NAV_ITEMS.map((section) => (
            <Box
              key={section.title}
              sx={{ position: "relative", textAlign: "center" }}
            >
              <Button
                onClick={() => handleScrollToSection(section.title)}
                sx={{
                  textTransform: "none",
                  color: "text.primary",
                  fontWeight: 600,
                  fontSize: { sm: "14px", lg: "17px" },
                  position: "relative",
                }}
              >
                {section.label}
              </Button>

              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: activeSection === section.title ? "70%" : 0,
                }}
                whileHover={{
                  width: "50%",
                  transition: { duration: 0.3 },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  height: "2px",
                  backgroundColor: theme.palette.primary.text,
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </Box>
          ))}
        </Box>
      </Toolbar>

      <Collapse
        in={menuOpen}
        timeout="auto"
        sx={{
          display: { sm: "none" },
          position: "fixed",
          top: 60,
          right: 3,
          width: "160px",
          bgcolor: theme.palette.background.bgcolor1,
          borderRadius: "4px",
          boxShadow: 3,
          zIndex: 1200,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
          {NAV_ITEMS.map((section) => (
            <MenuItem
              key={section.title}
              onClick={() => handleScrollToSection(section.title)}
            >
              <ListItemIcon>{section.icon}</ListItemIcon>
              <Typography
                variant="body2"
                color={theme.palette.primary.text}
                fontWeight={500}
                fontSize="clamp(12px,1vw,17px)"
              >
                {section.label}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
}
