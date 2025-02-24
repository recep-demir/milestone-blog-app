import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/blog/DeleteModal";

const MyBlogs = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { userId } = useSelector((state) => state.auth);
  const { getBlogs } = useBlogCalls();
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs();
  }, []);


  const myBlogs = blogs.filter((blog) => blog.userId === userId);

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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
              <Button size="small" onClick={() => navigate(`/my-blogs/${blog._id}`)}>Read More</Button>
              <DeleteModal blogId={blog._id} />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MyBlogs;
