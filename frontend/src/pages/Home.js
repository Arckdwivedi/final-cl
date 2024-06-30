import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to AI Chatbot
      </Typography>
      <Typography variant="h5" paragraph>
        Experience the power of AI-driven conversations
      </Typography>
      <Button variant="contained" color="primary" component={RouterLink} to="/chat" size="large">
        Start Chatting
      </Button>
    </Container>
  );
};

export default Home;