import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { Container, Typography, Box, CardMedia, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const MyBlogDetail = () => {
  const { id } = useParams();
  console.log("Parametre ID:", id);
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blog);
  const {currentUser} = useSelector(state => state.auth)

  const { getBlogs } = useBlogCalls();

  useEffect(() => {
    console.log("Bloglar çekiliyor mu");
    getBlogs();
  }, []);

  console.log("Parametre ID:", id);
  console.log("Tüm Bloglar:", blogs);

  const blog = blogs.find((blog) => blog._id === id);
  if (!blog) return <Typography variant="h6">Blog not found</Typography>;

  return (
    <Container>
      <CardMedia component="img" height="300" image={blog.image} alt={blog.title} sx={{ borderRadius: 2 }} />   
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Avatar sx={{ bgcolor: "primary.main", mr: 1 }}>
          <PersonIcon />
        </Avatar>
        <Typography variant="body1" sx={{ fontWeight: "bold", mr: 2 }}>
          {currentUser}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(blog.createdAt).toLocaleString("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric" })}
        </Typography>
      </Box>   
      <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
              {blog.title}
        </Typography>
<Typography variant="body1" sx={{ mt: 2 }}>{blog.content}</Typography>
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

    </Container>
  );
};

export default MyBlogDetail;
