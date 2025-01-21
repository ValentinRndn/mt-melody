const express = require('express');
const http = require('http');
const cors = require('cors'); // Import du middleware cors
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Connexion à MongoDB
require('dotenv').config();


dotenv.config();
connectDB(); 

const app = express();
const server = http.createServer(app);


// Middleware
app.use(cors({
  origin: 'http://localhost:5173',   
  methods: 'GET,POST,PUT,DELETE', 
  credentials: true 
}));

app.use(express.json()); 

// Routes
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/users', require('./routes/userRoute')); 
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
