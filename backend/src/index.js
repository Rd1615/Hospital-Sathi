const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const app = express();
const dbPromise = require('./lib/db.js');
const userModel = require('./model/user.model.js');

// import model


// import Route file


dotenv.config();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(cookieParser());

dbPromise
.then(async (db) => {
   userModel.createTableUsers();

    app.listen(PORT, () => {
      console.log("Server run port number ", PORT);

    });
  })
  .catch((err) => {
    console.error("Database initialization failed:", err.message);
  });