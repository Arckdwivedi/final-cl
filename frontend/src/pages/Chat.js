import React, { useState, useContext } from 'react';
import { TextField, Button, Typography, Container, Paper, List, ListItem, ListItemText } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const { user } = useContext(AuthContext);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { text: message, sender: 'user' };
    setConversation([...conversation, userMessage]);
    setMessage('');

    try {
      const res = await axios.post('http://localhost:5000/api/chat', { message }, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      const botMessage = { text: res.data.botResponse, sender: 'bot' };
      setConversation(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('Error sending message', err);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Chat with AI
      </Typography>
      <Paper sx={{ height: '60vh', overflowY: 'auto', marginBottom: 2, padding: 2 }}>
        <List>
          {conversation.map((msg, index) => (
            <ListItem 
              key={index} 
              sx={{
                backgroundColor: msg.sender === 'user' ? 'primary.light' : 'secondary.light',
                borderRadius: msg.sender === 'user' ? '20px 20px 0 20px' : '20px 20px 20px 0',
                padding: 1,
                marginBottom: 1,
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start'
              }}>
              <ListItemText primary={msg.text} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <form onSubmit={sendMessage} style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          sx={{ flexGrow: 1, marginRight: 2 }}
          variant="outlined"
          size="small"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Chat;
