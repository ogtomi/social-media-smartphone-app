var config = require("./dbconfig");
const { Client } = require("pg");

const getUsers = () => {
  const client = new Client(config);

  client.connect();
  client.query(`Select * from users`, (err, res) => {
    if (!err) {
      for (var i = 0; i < res.rows.length; i++) {
        var row = res.rows[i];
        console.log(row.name);
      }
    } else {
      console.log(err.message);
    }

    client.end;
  });
};

getUsers();
