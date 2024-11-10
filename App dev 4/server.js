const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dbConfig = require('./db');
const roomsRoutes = require('./routes/roomsRoute');
const usersRoute = require('./routes/userRoute');  // Corrected path and file name

app.use(express.json());

app.use('/api/rooms', roomsRoutes);
app.use('/api/users', usersRoute);  // Corrected to use usersRoute

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
