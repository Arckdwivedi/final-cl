import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" sx={{ marginBottom: 2 }}>
          404
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" align="center">
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/"
            sx={{ marginTop: 2 }}
          >
            Return to Home
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default NotFound;
