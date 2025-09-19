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
      console.log("Server run at1111112222222222222222211111111 portno ", PORT);
=======
      console.log("Server run at11111111111111111111111 333333333333333333portno ", PORT);
>>>>>>> 83fefd90c22520da581b2c972b68807412565040
    });
  })
  .catch((err) => {
    console.error("Database initialization failed:", err.message);
  });