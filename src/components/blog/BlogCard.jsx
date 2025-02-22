import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";



export default function BlogCard({ blog, handleDetails }) {
  const { _id, title, createdAt, content, image,likes,countOfVisitors,comments } = blog;
  const navigate = useNavigate()
  const { toggleLike } = useBlogCalls();
  const { user } = useSelector((state) => state.auth);

  const isLiked = likes.includes(user?._id);

  
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

  return (
    <Card
    id={_id}
      sx={{
        height: 390,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0.5rem",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <CardMedia
          sx={{ height: 140, objectFit: "contain", margin: "auto" }}
          image={image}
          component="img"
          title={title}
        />
        <Typography mt ={3} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography
          variant="body2"
          sx={{
            marginTop: "-1rem",
            color: "text.secondary",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
          }}
        >
          {content}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body2">
          Published Date: {formatDate(createdAt)}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", gap: 3 }}>
      <Box sx={{ display: "flex", gap:0.5, alignItems: "center", cursor: "pointer" ,"&:hover": { backgroundColor: "#f0f0f0", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"},"&:active": { transform: "scale(0.9)"}
        
       }} onClick={() => toggleLike(_id, user?._id)}>
          <FavoriteIcon sx={{ color: isLiked ? "red" : "gray" }} />
          <Typography>{likes.length}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 0.5,cursor: "pointer" ,"&:hover": { backgroundColor: "#f0f0f0", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"},"&:active": { transform: "scale(0.9)"}}}>
          <CommentIcon />
          <Typography>{comments.length}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 0.5,cursor: "pointer" ,"&:hover": { backgroundColor: "#f0f0f0", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"},"&:active": { transform: "scale(0.9)"}}}>
          <RemoveRedEyeIcon />
          <Typography>{countOfVisitors}</Typography>
        </Box>
        </Box>
        <Button variant="contained" onClick={() => navigate(`/detail/${blog._id}`, { state: { blog } })}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
