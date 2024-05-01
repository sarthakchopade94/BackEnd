const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Import route files
const initializeDatabaseRoute = require('./routes/initializeDatabase');
const listTransactionsRoute = require('./routes/listTransactions');
const statisticsRoute = require('./routes/statistics');
const barChartRoute = require('./routes/barChart');
const pieChartRoute = require('./routes/pieChart');
const combinedAPIRoute = require('./routes/combinedAPI');

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', initializeDatabaseRoute);
app.use('/api', listTransactionsRoute);
app.use('/api', statisticsRoute);
app.use('/api', barChartRoute);
app.use('/api', pieChartRoute);
app.use('/api', combinedAPIRoute);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
