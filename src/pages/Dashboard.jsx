import React, { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { Container, Grid, Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";

const Dashboard = () => {
  const { getBlogs } = useBlogCalls();
  const { blogs } = useSelector((state) => state.blog);

  //!Pagination
  const [page, setPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil((blogs?.length || 0) / blogsPerPage);
  const currentBlogs = blogs?.slice(
    (page - 1) * blogsPerPage, 
    page * blogsPerPage
  );

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        {currentBlogs?.map((blog) => (
          <Grid item xs={12} md={6} lg={4} key={blog._id}
          sx ={{
          minHeight: "350px",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
          }}
          >
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, value) => setPage(value)}
        sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}
      />
      <br />
    </Container>
  );
};

export default Dashboard;
