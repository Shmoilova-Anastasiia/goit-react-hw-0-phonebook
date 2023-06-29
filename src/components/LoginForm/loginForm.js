import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField, Box, Container, Typography } from '@mui/material';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: ' rgb(33 33 33) 0px 2px 10px 1px',
          marginBottom: '20px',
          background:
            'radial-gradient(circle, rgba(224,232,236,1) 0%, rgba(192,194,195,1) 100%)',
        }}
      >
        <Typography variant="h4">Log In</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, fontSize: '40px' }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />

          <Button type="submit" variant="contained" size="small">
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
