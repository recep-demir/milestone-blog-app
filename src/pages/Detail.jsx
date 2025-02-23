import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Card, CardContent, CardMedia, Avatar, TextField, Button, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect } from "react";
import { useState } from "react";

const Detail = () => {
  const location = useLocation();
  const blog = location.state?.blog;
  const dispatch =useDispatch();
  const {comments} = useSelector(state => state.blog)
  const {getComments,addComment} = useBlogCalls()
  const [Content, setContent] = useState("");


  useEffect(()=>{
    getComments()
  },[])

  const blogComments = comments.filter((comment) => comment.blogId === blog._id);
  console.log("Filtered Comments:", blogComments);

  const handleAddComment = () => {
    if (Content.trim()) {
      addComment(blog._id, Content);
      setContent("");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <CardMedia component="img" height="300" image={blog.image} alt={blog.title} sx={{ borderRadius: 2 }} />
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

      <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
        {blog.title}
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        {blog.content}
      </Typography>

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

      <TextField 
      label="Write a comment..." 
      fullWidth 
      multiline 
      rows={3}
      value={Content}
      onChange={(e) => setContent(e.target
      .value)}
      sx={{ mt: 3 }} />

      <Button variant="contained" onClick={handleAddComment} sx={{ mt: 2 }}>
        Add Comment
      </Button>


      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Comments</Typography>
        {blogComments.map((comment) => (
          <Box key={comment._id} sx={{ mt: 2, p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {comment.userId?.username || "Anonymous"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(comment.createdAt).toLocaleString("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric" })}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {comment.comment}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Detail;