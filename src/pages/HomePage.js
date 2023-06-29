import { Typography } from '@mui/material';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    padding: 30,
    boxShadow: ' 0 5px 5px 0 #008000',
    background:
      'radial-gradient(circle, rgba(224,232,236,1) 0%, rgba(192,194,195,1) 100%)',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Typography variant="h2" component="h2">
        Welcome to the phone book! To use the application, you must be
        authorized.
      </Typography>
    </div>
  );
}
