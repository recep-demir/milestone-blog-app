import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MyBlogs = () => {
  const { blogs } = useSelector(state => state.blog);
  const { userId } = useSelector(state => state.auth);
  // 67bb973e1d32840b5fab0c85
   console.log("myblog sayfasi", blogs)
   console.log("userid", userId)
  const { getBlogs } = useBlogCalls();
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs();
  }, []);
  console.log("Bloglar:", blogs);

  const myBlogs = blogs.filter(blog => blog.userId === userId);

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
    {myBlogs.map((blog) => (
      <Grid item xs={12} sm={6} md={4} key={blog._id}>
        <Card>
          <CardMedia component="img" height="140" image={blog.image} alt={blog.title} />
          <CardContent>
            <Typography gutterBottom variant="h5">{blog.title}</Typography>
            <Typography variant="body2" color="text.secondary">{blog.content.substring(0, 100)}...</Typography>
          </CardContent>
          <Button size="small" onClick={() => navigate(`/myblog/${blog._id}`)}>Read More</Button>
        </Card>
      </Grid>
    ))}
  </Grid>
);
};

export default MyBlogs;

