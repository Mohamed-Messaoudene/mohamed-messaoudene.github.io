"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
  Snackbar,
  Alert,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Send as SendIcon } from "@mui/icons-material";
import CustomDevider from "../../CustomDevider";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = async (data) => {
    setLoading(true);
    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      console.log(serviceID, templateID, userID);
      await emailjs.send(serviceID, templateID, data, userID);
      setSuccess(true);
      reset(); // Reset form after successful submission
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
    setError(false);
  };

  return (
    <Box
    id='contact'
    ref={ref}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingBlock={3}
      paddingInline={{ xs: "10px", sm: "30px", md: "60px" }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "clamp(18px, 3vw, 40px)",
          color: theme.palette.primary.text,
        }}
      >
        Contact <span style={{ color: theme.palette.primary.main }}>Me</span>
      </Typography>
      <CustomDevider />

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView?{ opacity: 1, x: 0 }:{}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Box sx={{ p: { xs: 1, sm: 4 }, mt: 2 }}>
          <form onSubmit={handleSubmit(sendEmail)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Your Name"
                  {...register("name", { required: "Name is required" })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  sx={{
                    mb: { xs: 1, sm: 2 }, // Reduce margin on smaller screens
                    "& .MuiInputBase-input": {
                      fontSize: { xs: "11px", sm: "16px", md: "18px" }, // Adjust font size
                      padding: {
                        xs: "4px 10px",
                        sm: "8px 12px",
                        md: "10px 14px",
                      }, // Adjust padding
                      height: { xs: "2em", sm: "1.5em" }, // Ensure proper height
                      lineHeight: "2em", // Align text properly
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: { xs: "10px", sm: "14px", md: "16px" }, // Adjust label font size
                      transform: "translate(14px, 10px) scale(1)", // Ensure proper label positioning
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -4px) scale(0.75)", // Adjust label when focused
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Your Email"
                  type="email"
                  {...register("email", {
                    required: "Valid email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={{
                    mb: { xs: 1, sm: 2 }, // Reduce margin on smaller screens
                    "& .MuiInputBase-input": {
                      fontSize: { xs: "11px", sm: "16px", md: "18px" }, // Adjust font size
                      padding: {
                        xs: "4px 10px",
                        sm: "8px 12px",
                        md: "10px 14px",
                      }, // Adjust padding
                      height: { xs: "2em", sm: "1.5em" }, // Ensure proper height
                      lineHeight: "2em", // Align text properly
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: { xs: "10px", sm: "14px", md: "16px" }, // Adjust label font size
                      transform: "translate(14px, 10px) scale(1)", // Ensure proper label positioning
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -4px) scale(0.75)", // Adjust label when focused
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="Subject"
                  {...register("subject", { required: "Subject is required" })}
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                  sx={{
                    mb: { xs: 1, sm: 2 }, // Reduce margin on smaller screens
                    "& .MuiInputBase-input": {
                      fontSize: { xs: "11px", sm: "16px", md: "18px" }, // Adjust font size
                      padding: {
                        xs: "4px 10px",
                        sm: "8px 12px",
                        md: "10px 14px",
                      }, // Adjust padding
                      height: { xs: "2em", sm: "1.5em" }, // Ensure proper height
                      lineHeight: "2em", // Align text properly
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: { xs: "10px", sm: "14px", md: "16px" }, // Adjust label font size
                      transform: "translate(14px, 10px) scale(1)", // Ensure proper label positioning
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -4px) scale(0.75)", // Adjust label when focused
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="Your Message"
                  multiline
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  sx={{
                    mb: { xs: 1, sm: 2 }, // Reduce margin on smaller screens
                    "& .MuiInputBase-input": {
                      fontSize: { xs: "11px", sm: "16px", md: "18px" }, // Adjust font size
                      padding: {
                        xs: "4px 10px",
                        sm: "8px 12px",
                        md: "10px 14px",
                      }, // Adjust padding
                      height: { xs: "2em", sm: "1.5em" }, // Ensure proper height
                      lineHeight: "2em", // Align text properly
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: { xs: "10px", sm: "14px", md: "16px" }, // Adjust label font size
                      transform: "translate(14px, 10px) scale(1)", // Ensure proper label positioning
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -4px) scale(0.75)", // Adjust label when focused
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Box display="flex" justifyContent="center">
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={loading}
                      endIcon={
                        loading ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <SendIcon />
                        )
                      }
                      sx={{
                        textTransform:'none',
                        py: "clamp(4px,1.2vw,8px)",
                        px: "clamp(6px,1.4vw,15px)",
                        fontSize: "clamp(11px,1.5vw,16px)",
                        bgcolor: theme.palette.secondary.main,
                        "&:hover": {
                          bgcolor: theme.palette.secondary.dark,
                        },
                      }}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </form>
        </Box>
      </motion.div>

      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your message has been sent successfully!
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          There was an error sending your message. Please try again.
        </Alert>
      </Snackbar>
    </Box>
  );
}
