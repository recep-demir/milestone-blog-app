import { Box, Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center", height:"100vh"}}>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
        404 - Page Not Found
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>

      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={() => navigate(-1)}
          sx={{ px: 4, py: 1.5 }}
        >
          Go Back
        </Button>

        <Button
          component={Link}
          to="/"
          variant="outlined"
          sx={{ px: 4, py: 1.5 }}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;