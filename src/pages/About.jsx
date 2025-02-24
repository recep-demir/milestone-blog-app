import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Code } from "@mui/icons-material";

const About = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="82.1vh" backgroundColor="grey.500">
      <Card sx={{
         p: 5, textAlign: "center", maxWidth: 800,
         margin:"1rem",
          overflow: "auto",
          border: "2px solid purple",
          // backgroundColor:"gray",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },

         
         }}>
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
              sx={{ "&:hover": { color: "purple" } }}
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/recep-demir"
              target="_blank"
              sx={{ "&:hover": { color: "purple" } }}
            >
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://dev.to/recepdemir"
              target="_blank"
              sx={{ "&:hover": { color: "purple" } }}
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
