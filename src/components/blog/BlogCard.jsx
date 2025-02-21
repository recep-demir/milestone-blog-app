import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { btnStyle } from "../../styles/globalStyles";
import { Button } from "@mui/material";


export default function BlogCard({ blog, setInitialState, handleOpen }) {
  const { _id, title, createdAt, content, image } = blog;

  
  return (
    <Card
      sx={{
        height: 390,
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0.5rem",
      }}
    >
      <CardContent>
        <CardMedia
        sx={{ height: 140, objectFit: "contain" }}
        image={image}
        component="img"
        title={title}
      />
      <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {content}
        </Typography>
      </CardContent>
      
      <CardContent>
        <Typography variant="body2">Published Date: {createdAt}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center", gap: 2 }}>
        <FavoriteIcon/>
        <CommentIcon/>
        <RemoveRedEyeIcon/>
        <Button variant="contained">Contained</Button>

      </CardActions>
      
    </Card>
  );
}
