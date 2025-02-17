
import { Button, TextField } from '@mui/material'
import React from 'react'

const RegisterForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,}
    
) => {
  return (
    
    <form onSubmit={handleSubmit}>
        <TextField
        name = "username"
        label="Username*"
        variant="outlined"
        fullWidth
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        margin="normal"
        error={touched.username && errors.username}
        helperText={touched.username && errors.username}
        />
        <TextField
        name="firstName"
        label="FirstName"
        variant="outlined"
        fullWidth
        value={values.firstName}
        onChange={handleChange}
        error={touched.firstName && errors.firstName}
        helperText={touched.firstName && errors.firstName} 
        onBlur={handleBlur}
        margin="normal"
      />
      <TextField
        name="lastName"
        label="LastName"
        variant="outlined"
        fullWidth
        value={values.lastName}
        onChange={handleChange}
        error={touched.lastName && errors.lastName}
        helperText={touched.lastName && errors.lastName} 
        onBlur={handleBlur}
        margin="normal"
      />
      <TextField
        name="email"
        label="E-Mail*"
        variant="outlined"
        fullWidth
        value={values.email}
        onChange={handleChange}
        error={touched.email && errors.email}
        helperText={touched.email && errors.email} 
        onBlur={handleBlur}
        margin="normal"
        type="email"
      />
      <TextField
        name="image"
        label="Image"
        variant="outlined"
        fullWidth
        value={values.image}
        onChange={handleChange}
        error={touched.image && errors.image}
        helperText={touched.image && errors.image} 
        onBlur={handleBlur}
        margin="normal"
        
      />
      <TextField
        name="bio"
        label="Bio"
        variant="outlined"
        fullWidth
        value={values.bio}
        onChange={handleChange}
        error={touched.bio && errors.bio}
        helperText={touched.bio && errors.bio} 
        onBlur={handleBlur}
        margin="normal"
        
      />
      <TextField
        name="password"
        label="Password*"
        variant="outlined"
        fullWidth
        value={values.password}
        onChange={handleChange}
        error={touched.password && errors.password}
        helperText={touched.password && errors.password} 
        onBlur={handleBlur}
        margin="normal"
        type="password"
      />

      <Button variant="contained" fullWidth type='submit' >Submit</Button>



    </form>
  )
}

export default RegisterForm