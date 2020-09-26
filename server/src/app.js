const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uploadRoutes = require('./routes/upload-routes');
const currentRoutes = require('./routes/current-routes');
const app = express();
const PORT = 9000;

// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/upload', uploadRoutes);

app.use('/current', currentRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fmo1o.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`),
    ),
  )
  .catch((error) => {
    throw error;
  });
