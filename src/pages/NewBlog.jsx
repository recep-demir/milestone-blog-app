
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Avatar, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";

const NewBlog = () => {
  const dispatch =useDispatch();
  const {categories} = useSelector(state => state.blog)
  const {getCategories} =useBlogCalls()




  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
      

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 50,
              height: 50,
            }}
          >
            <LibraryAddIcon sx={{
              m: "auto",
              width: 40,
              height: 40,
            }} />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            New Blog
          </Typography>


          <form >
      <TextField
        name="title"
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange
        required
        type="text"
      />
      <TextField
        label="Image URL"
        variant="outlined"
        fullWidth
        margin="normal"       
        onChange
        required
      />
      <FormControl required
      variant="outlined"
      fullWidth
      margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          // value={category}
          onChange
          
        >
          <MenuItem value="category1">Category 1</MenuItem>
          <MenuItem value="category2">Category 2</MenuItem>
          <MenuItem value="category3">Category 3</MenuItem>
          {/* API'den çekilecek kategoriler buraya eklenebilir */}
        </Select>
      </FormControl>
      <FormControl 
      variant="outlined"
      fullWidth
      margin="normal"
      required
      
      >
        <InputLabel>Status</InputLabel>
        <Select
          // value={status}
          onChange
        >
          <MenuItem value="draft">Draft</MenuItem>
          <MenuItem value="publish">Publish</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Content"
        variant="outlined"
      fullWidth
      margin="normal"
        multiline
        rows={2}
        // value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <br />
      <br />
      
      <Button variant="contained" fullWidth type="submit">
        New Blog
      </Button>
    

    </form>
    
      
        </Grid>
       

      </Grid>
      <br />
      <br />
      <br />
      <br />
    </Container>
    
    
  );
};

export default NewBlog