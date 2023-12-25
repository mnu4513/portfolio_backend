const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mnu4513:1234qwer@firstcluster.daae6aq.mongodb.net/portofolio"
  )
  .then(() => console.log("connected to mongoDB"))
  .catch((error) => console.log(error));

  const cors = require('cors');
  app.use(cors({
      origin: 'http://localhost:3000'
  }));
  

const route = require("./routes/routes");
app.use("/", route);

app.listen(3001, function () {
  console.log("app is running on port", 3001);
});