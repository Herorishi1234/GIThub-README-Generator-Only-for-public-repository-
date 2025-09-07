const axios = require('axios');
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
let GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

async function generateWithGemini(prompt) {
  if (!GEMINI_API_KEY) throw new Error('Missing GEMINI_API_KEY');

  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Gemini API error:', error.response?.data || error.message); 
    throw new Error('Failed to generate content with AI');
  }
}

module.exports = { generateWithGemini };








