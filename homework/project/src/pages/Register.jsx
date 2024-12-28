import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert, Grid, Paper } from '@mui/material';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    console.log('Form submitted', formData);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '100%',
        height: '100vh', 
        backgroundImage: 'url(https://blogger.googleusercontent.com/img/a/AVvXsEhw_cF3CJDXk8xId9tfWhK-2N_pOL7e15CiNL5Og92anNXrwivzjgYOCLfHTjIuIz8OQuMJKKWQ_kJRIDe8tcaJpMpqu967t33hnMyAPTGm7IOtRwexcltR6GUxWgKoAnlTL_Gv-YJ2qdX7s-EVu317Y0eTZjw-Qvwxq6Gbq5eejGk29O1jfgZysdqHzg=s1600-rw)',
        backgroundSize: 'cover',  
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed', 
      }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Typography variant="h5" component="h2" align="center" sx={{ marginBottom: 2 }}>
            Create an Account
          </Typography>

          {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />

            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />

            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />

            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: '10px', fontWeight: 'bold' }}
            >
              Register
            </Button>
          </form>

          <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
            Already have an account? <a href="/login">Login here</a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
