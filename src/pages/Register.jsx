import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Formik } from "formik";
import RegisterForm from "../components/auth/RegisterForm";
import Footer from "../components/Footer"; // Footer'ı dahil et

const Register = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Grid
          container
          justifyContent="center"
          direction="row-reverse"
          rowSpacing={{ sm: 3 }}
          sx={{ height: "100%", p: 2 }}
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
              <LockOpenIcon size="30" />
            </Avatar>
            <Typography
              variant="h4"
              align="center"
              mb={1}
              color="secondary.light"
            >
              Sign Up
            </Typography>

            <Formik
              initialValues={{
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                image: "",
                bio: "",
                password: "",
              }}
              validate={{}}
              onSubmit={(values) => {}}
              component={(props) => <RegisterForm {...props} />}
            />

            <Box sx={{ textAlign: "center", mt:2, color: "secondary.main" }}>
              <Link to="/">Already have an account? Sign in</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
     
      <Footer />
    </Box>
  );
};

export default Register;
