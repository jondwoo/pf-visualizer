const express = require('express');
const cors = require('cors');

const uploadFileRoutes = require('./routes/upload-file');

const app = express();
const PORT = 9000;

app.use(cors());
app.use('/upload-csv', uploadFileRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
