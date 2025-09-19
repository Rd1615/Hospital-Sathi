const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const app = express();
const dbPromise = require('./lib/db.js');
const userModel = require('./model/user.model.js');
const { use } = require("react");

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
<<<<<<< HEAD
      console.log("Server 111111111111111111111111111111111 at portno ", PORT);
=======
      console.log("Server run at portno ", PORT);
>>>>>>> f475c1627fe10739bbc03ef1349d4be9bd29e7d6
    });
  })
  .catch((err) => {
    console.error("Database initialization failed:", err.message);
  });