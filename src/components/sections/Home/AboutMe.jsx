import {
  Box,
  useTheme,
  Typography,
  Stack,
  Table,
  TableBody,
  TableCell,
} from "@mui/material";
import { Cake, Phone, Public, Home } from "@mui/icons-material";
import CustomDevider from "../../CustomDevider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <Box
      id="about"
      ref={ref}
      width={"100%"}
      height={"auto"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginBlock={"30px"}
      paddingInline={{
        xs: "10px",
        sm: "30px",
        md: "60px",
        lg: "110px",
        xl: "220px",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        color={theme.palette.primary.text}
        sx={{ fontSize: "clamp(18px, 3vw, 40px)" }}
      >
        About <span style={{ color: theme.palette.primary.main }}>Me</span>
      </Typography>
      <CustomDevider />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={"center"}
        justifyContent={{ sm: "space-between", md: "space-around" }}
        spacing={3}
        mt={5}
      >
        {/* Image Box with Animation */}
        <motion.img
          src="/avatar.svg"
          alt="Messaoudene Mohamed"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            width: "40%",
            maxWidth: "400px",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
        />

        {/* Description and Table */}
        <Box
          sx={{
            width: { xs: "95%", sm: "55%" },
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          <Typography
            variant="body1"
            color={theme.palette.primary.text}
            sx={{
              fontSize: "clamp(11px, 1.7vw, 20px)",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                flexWrap: "wrap",
                gap: "4px",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "start" },
              }}
            >
              {"I am Messaoudene Mohamed, a full-stack developer with expertise in various technologies, primarily the MERN stack. I graduated in June 2025 as an ICT Engineer from the National Higher School of Telecommunications and Information and Communication Technologies."
                .split(" ")
                .map((word, wordIndex) => (
                  <Box
                    key={wordIndex}
                    sx={{ whiteSpace: "nowrap", display: "inline-block" }}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 18 }}
                        animate={
                          inView ? { opacity: 1, filter: "blur(0)", y: 0 } : {}
                        }
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                          delay: (wordIndex * 5 + letterIndex) * 0.02,
                        }}
                        style={{ display: "inline-block" }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                    <span>&nbsp;</span>
                  </Box>
                ))}
              {/* Animating the Link */}
              <motion.a
                href="https://www.ensttic.dz/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
                animate={inView ? { opacity: 1, filter: "blur(0)", y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 4.5 }}
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                ENSTTIC
              </motion.a>
            </Box>
          </Typography>

          {/* Animated Table */}
          <Box
            width="100%"
            display="flex"
            justifyContent={{ xs: "center", sm: "flex-start" }}
            mt={1}
          >
            <Table sx={{ borderCollapse: "collapse", width: "auto" }}>
              <TableBody>
                {[
                  {
                    icon: (
                      <Cake
                        color="primary"
                        sx={{
                          fontSize: { xs: "15px", sm: "18px", md: "24px" },
                        }}
                      />
                    ),
                    label: "Age",
                    value: "23",
                  },
                  {
                    icon: (
                      <Phone
                        color="primary"
                        sx={{
                          fontSize: { xs: "15px", sm: "18px", md: "24px" },
                        }}
                      />
                    ),
                    label: "Phone",
                    value: "+213 776 26 84 40",
                  },
                  {
                    icon: (
                      <Public
                        color="primary"
                        sx={{
                          fontSize: { xs: "15px", sm: "18px", md: "24px" },
                        }}
                      />
                    ),
                    label: "Nationality",
                    value: "Algerian",
                  },
                  {
                    icon: (
                      <Home
                        color="primary"
                        sx={{
                          fontSize: { xs: "15px", sm: "18px", md: "24px" },
                        }}
                      />
                    ),
                    label: "Address",
                    value: "Sidi Naamane, Medea",
                  },
                ].map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    style={{ display: "table-row" }}
                  >
                    <TableCell
                      sx={{
                        fontSize: "clamp(10px, 1.5vw, 18px)",
                        color: theme.palette.primary.text,
                        borderBottom: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        py: 2,
                        px: 0,
                      }}
                    >
                      {item.icon} {item.label}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "clamp(10px, 1.5vw, 18px)",
                        color: theme.palette.primary.text,
                        borderBottom: "none",
                        gap: 0,
                        paddingBlock: 2,
                        pr: 0,
                      }}
                    >
                      {item.value}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default AboutMe;
