import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Card, CardContent, CardMedia, Avatar, TextField, Button, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonIcon from "@mui/icons-material/Person";

const Detail = () => {
  const location = useLocation();
  const blog = location.state?.blog; // Blog verisini al

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Blog Resmi */}
      <CardMedia component="img" height="300" image={blog.image} alt={blog.title} sx={{ borderRadius: 2 }} />

      {/* Yazar Bilgileri */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Avatar sx={{ bgcolor: "primary.main", mr: 1 }}>
          <PersonIcon />
        </Avatar>
        <Typography variant="body1" sx={{ fontWeight: "bold", mr: 2 }}>
          {blog.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(blog.createdAt).toLocaleString("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric" })}
        </Typography>
      </Box>

      {/* Blog Başlığı */}
      <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
        {blog.title}
      </Typography>

      {/* Blog İçeriği */}
      <Typography variant="body1" sx={{ mt: 2 }}>
        {blog.content}
      </Typography>

      {/* İkonlar */}
      <Box sx={{ display: "flex", gap: 3, mt: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <FavoriteIcon />
          <Typography>0</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <CommentIcon />
          <Typography>0</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <RemoveRedEyeIcon />
          <Typography>0</Typography>
        </Box>
      </Box>

      {/* Yorum Yazma Alanı */}
      <TextField label="Write a comment..." fullWidth multiline rows={3} sx={{ mt: 3 }} />

      {/* Yorum Ekle Butonu */}
      <Button variant="contained" sx={{ mt: 2 }}>
        Add Comment
      </Button>

      {/* Yorumlar */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Comments</Typography>
        <Box sx={{ mt: 2, p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Staff
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sat, 01 Feb 2025
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Detail;
