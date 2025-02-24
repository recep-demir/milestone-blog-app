import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Code } from "@mui/icons-material";

const About = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ p: 5, textAlign: "center", maxWidth: 800 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold">
            Recep Demir
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
            Frontend Developer
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/recep-demir"
              target="_blank"
              sx={{ "&:hover": { color: "red" } }}
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/recep-demir"
              target="_blank"
              sx={{ "&:hover": { color: "red" } }}
            >
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://dev.to/recepdemir"
              target="_blank"
              sx={{ "&:hover": { color: "red" } }}
            >
              <Code fontSize="large" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;
