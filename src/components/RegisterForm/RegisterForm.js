import { useDispatch } from 'react-redux';
import { Button, TextField, Box, Container, Typography } from '@mui/material';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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

          padding: '20px',
          marginBottom: '20px',
          boxShadow: ' rgb(33 33 33) 0px 2px 10px 1px',
          background:
            'radial-gradient(circle, rgba(224,232,236,1) 0%, rgba(192,194,195,1) 100%)',
        }}
      >
        <Typography variant="h4">Sign Up</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, fontSize: '40px' }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="User name"
            name="name"
            autoComplete="name"
            autoFocus
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth
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

          <Button type="submit" variant="outlined" size="small">
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
