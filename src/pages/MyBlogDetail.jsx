import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { Container, Typography, Box } from "@mui/material";
import DeleteModal from "../components/blog/DeleteModal";

const MyBlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogs } = useBlogCalls();

  useEffect(() => {
    getBlogs();
  }, []);

  console.log("Parametre ID:", id);
  console.log("Tüm Bloglar:", blogs);
  
  const blog = blogs.find((blog) => blog._id === id);
  if (!blog) return <Typography variant="h6">Blog not found</Typography>;

  return (
    <Container>
      <Typography variant="h4">{blog.title}</Typography>
      <img src={blog.image} alt={blog.title} width="100%" />
      <Typography variant="body1">{blog.content}</Typography>
      <Box sx={{ mt: 2 }}>
        <DeleteModal blogId={blog._id} />
      </Box>
    </Container>
  );
};

export default MyBlogDetail;
