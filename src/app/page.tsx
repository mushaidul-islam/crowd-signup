"use client";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";

export type ApiResponse = {
  message: string;
};

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    });
    const { message } = (await res.json()) as ApiResponse;
    setMessage(message);
    if (res.ok) {
      setEmail("");
      setName("");
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0C090A",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Backdrop
        sx={{
          color: "#EEEEEE",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container maxWidth="sm">
        <Box textAlign="center" py={12}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: "#EEEEEE",
              fontSize: {
                md: "3.75rem",
                sm: "3rem",
                xs: "2rem",
              },
            }}
          >
            youthventure.ai
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            gutterBottom
            sx={{ color: "#D8D9DA" }}
          >
            Sign up to join our product waitlist !
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
            <TextField
              id="name"
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                style: {
                  color: "#EEEEEE",
                  backgroundColor: "#242124",
                },
              }}
              InputLabelProps={{
                style: { color: "#EEEEEE" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#EEEEEE",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#EEEEEE",
                  },
                },
              }}
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="Email"
              fullWidth
              margin="normal"
              InputProps={{
                style: {
                  color: "white",
                  backgroundColor: "#242124",
                  borderColor: "white",
                },
              }}
              InputLabelProps={{
                style: { color: "#EEEEEE" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#EEEEEE",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#EEEEEE",
                  },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                my: 3,
                bgcolor: "black",
                borderRadius: "1rem",
                color: "#EEEEEE",
                fontSize: "1.2rem",
                "&:hover": {
                  bgcolor: "#EEEEEE",
                  color: "#242124",
                },
              }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </Box>
          <Typography color={"#EEEEEE"}>{message}</Typography>
        </Box>
      </Container>
    </Box>
  );
}
