import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { Button, Container, Typography } from "@mui/material";
import DeleteModal from "../components/blog/DeleteModal";

const MyBlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useSelector(state => state.blog);
  const { getBlogs } = useBlogCalls();

  useEffect(() => {
    getBlogs();
  }, []);

  const blog = blogs.find(blog => blog._id === id);
  if (!blog) return <p>Blog not found</p>;

  return (
    <Container>
      <Typography variant="h4">{blog.title}</Typography>
      <img src={blog.image} alt={blog.title} width="100%" />
      <Typography variant="body1">{blog.content}</Typography>

      <DeleteModal blogId={blog._id} />
    </Container>
  );
};

export default MyBlogDetail;
