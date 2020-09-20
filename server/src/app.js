const express = require('express');
const cors = require('cors');

const uploadRoutes = require('./routes/upload-routes');
const app = express();
const PORT = 9000;

// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/upload', uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
