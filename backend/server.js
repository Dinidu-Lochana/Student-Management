const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());

app.use(bodyParser.json());

const studentRouter = require('./routes/StudentRoutes');

app.use('/student',studentRouter)

  mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
   
    app.listen(PORT, () => {
      console.log("Database Connection successful!, listening in on port 8070");
    });
  })
  .catch((error) => {
    console.log(error);
  });

