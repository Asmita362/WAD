const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);


mongoose.connect('mongodb+srv://asmitapawar141:6ewCxhJsLuySpBnu@test-pro-db.bqrfv31.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  });

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
