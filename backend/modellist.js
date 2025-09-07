// listModels.js
const axios = require('axios');
require('dotenv').config();


const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function listModels() {
  try {
    const response = await axios.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`);
    console.log('Available models:', response.data.models);
  } catch (error) {
    console.error('Error fetching models:', error.response?.data || error.message);
  }
}

listModels();
