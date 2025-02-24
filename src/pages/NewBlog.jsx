
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Avatar, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const {categories} = useSelector(state => state.blog)
  const {getCategories,addBlog} =useBlogCalls()
  const navigate = useNavigate();
const { currentUser } = useSelector(state => state.auth); 

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    categoryId: "",
    content: "",
    isPublish: "false"
  });

  useEffect(() => {
    console.log("Kategoriler geliyorrr");
    getCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "isPublish" ? value === "true" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(formData);
    if (formData.isPublish) {
      navigate("/");
    } else {
      navigate("/my-blogs");
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" direction="row-reverse" rowSpacing={{ sm: 3 }} sx={{ height: "100vh", p: 2 }}>
        <Grid item xs={12} sm={10} md={6}>
        <Avatar sx={{ backgroundColor: "secondary.light", m: "auto", width: 50, height: 50 }}>
            <LibraryAddIcon sx={{ m: "auto", width: 40, height: 40 }} />
          </Avatar>
          <Typography variant="h4" align="center" mb={2} color="secondary.light">New Blog</Typography>

          <form  onSubmit={handleSubmit}>
      <TextField
        name="title"
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleChange}
        required
        type="text"
      />
      <TextField
        name="image"
        label="Image URL"
        variant="outlined"
        fullWidth
        margin="normal"       
        onChange={handleChange}
        required
      />
      <FormControl required
      variant="outlined"
      fullWidth
      margin="normal">
        <InputLabel>Category</InputLabel>
        <Select name="categoryId" value={formData.categoryId} onChange={handleChange}>         
          {categories.map((category)=>(
            <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <FormControl variant="outlined" fullWidth margin="normal" required>
          <InputLabel>Status</InputLabel>
          <Select name="isPublish" value={formData.isPublish} onChange={handleChange}>
          <MenuItem value="false">Draft</MenuItem>
          <MenuItem value="true">Publish</MenuItem>
          </Select>
        </FormControl>

        <TextField name="content" label="Content" variant="outlined" fullWidth margin="normal" multiline rows={2} onChange={handleChange} required />
      <br />
      <br />
      
      <Button variant="contained" fullWidth type="submit">
        New Blog
      </Button>  

    </form>
        </Grid> 

      </Grid>
      
    </Container>   
    
  );
};

export default NewBlog