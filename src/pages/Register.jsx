import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import RegisterForm from "../components/auth/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";


const Register = () => {
  const {register} = useAuthCalls()
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Too short. Username should be more than 5 character")
      .max(50, "Too Long! Username shouldn't be more than 50 character")
      .required("Required"),
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      ,
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      ,
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password should be more than 8 character")
      .matches(/[a-z]/, "Password should include lowercase")
      .matches(/[A-Z]/, "Password should include uppercase")
      .matches(/\d+/, "Password should include numeric")
      .matches(/[@$?!%&*_-]+/, "Password should include special characters (@$?!%&*_-)"),
  });
  return (

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
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log(values)
                register(values)
              }}
              component={(props) => <RegisterForm {...props} />}
            />

            <Box sx={{ textAlign: "center", mt:2, color: "secondary.main" }}>
              <Link to="/">Already have an account? Sign in</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      

  );
};

export default Register;
