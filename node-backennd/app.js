const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const port = 3210;

var config = require("./dbconfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "postgres",
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

sequelize
  .authenticate()
  .then(() => {
    console.log("Success!");
  })
  .catch((err) => {
    console.error("Error: ", err);
  });

const users = sequelize.define(
  "users",
  {
    id: { primaryKey: true, type: Sequelize.INTEGER },
    name: { type: Sequelize.STRING },
    surname: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    created_at: { type: Sequelize.DATE },
    //profile_image: { type: Sequelize.STRING },
    date_of_birth: { type: Sequelize.DATE },
    sex: { type: Sequelize.STRING },
    short_description: { type: Sequelize.STRING },
  },
  {
    underscored: true,
    createdAt: false,
    updatedAt: false,
  }
);

users.sync({ force: false }).then(() => {
  console.log("SYNC OK");
});

// app.post("/user", (req, res) => {
//   const user = req.body;

//   console.log(user);
//   users.push(user);

//   res.send("User has been added to database");
// });

app.get("/user", (req, res) => {
  users.findAll().then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}`)
);
