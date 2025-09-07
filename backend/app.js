const express = require('express');
const cors = require('cors');
require('dotenv').config();

const readmeRoutes = require('./routes/readmeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api', readmeRoutes);

app.get('/',(req, res) => {
    res.send({
        activeStatus: true,
        error:false,
    })
})

app.get('/api/health',(req, res) => {
    res.json({
        status:'OK',
        message: 'README Generator API is running',
        timestamp: new Date().toISOString(),
    })
})

app.listen(PORT, () => {
    console.log(`🚀 README Generator API running on port ${PORT}`)
    console.log(`📝 Health check: http://localhost:${PORT}/api/health`)
})

module.exports = app;
