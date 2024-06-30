const express = require('express');
const auth = require('../middleware/auth');
const Anthropic = require('@anthropic-ai/sdk');

const router = express.Router();

// Initialize the Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

router.post('/', auth, async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await anthropic.completions.create({
      model: "claude-2", // or whichever model you prefer
      prompt: `Human: ${message}\n\nAssistant:`,
      max_tokens_to_sample: 300,
      temperature: 0.8,
    });

    const botResponse = completion.completion.trim();
    res.json({ botResponse });
  } catch (err) {
    console.error('Error calling Anthropic API:', err);
    res.status(500).send('Error processing your request');
  }
});

module.exports = router;