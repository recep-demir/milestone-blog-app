import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography, Avatar, Box } from "@mui/material";

const Profile = () => {
  const { currentUser} = useSelector((state) => state.auth);
  const { email} = useSelector((state) => state.auth);

  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5, height: "100vh" }}>
      <Avatar sx={{ width: 200, height: 200 }} />
      <Typography variant="h5" sx={{ mt: 2 }}>
        User Name: {currentUser || "Unknown"}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Email: {email || "Not available"}
      </Typography>
    </Container>
  );
};

export default Profile;
