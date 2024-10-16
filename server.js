const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dbConfig = require('./db');
const roomsRoutes = require('./routes/roomsRoute');

app.use('/api/rooms', roomsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
