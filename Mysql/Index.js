const fs = require("fs");
const csvtojson = require("csvtojson");
const mysql = require("mysql");
const { json } = require("express");

// MySQL connection details
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shashi@123",
  database: "javascript",
});

// Connect to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");

  // // SQL statement to create the table
  // // const createTableSql = `
  // //   CREATE TABLE IF NOT EXISTS matches (
  // //     id INT AUTO_INCREMENT PRIMARY KEY,
  // //     season INT,
  // //     city VARCHAR(255),
  // //     date VARCHAR(300),
  // //     team1 VARCHAR(255),
  // //     team2 VARCHAR(255),
  // //     toss_winner VARCHAR(255),
  // //     toss_decision VARCHAR(255),
  // //     result VARCHAR(255),
  // //     dl_applied INT,
  // //     winner VARCHAR(255),
  // //     win_by_runs INT,
  // //     win_by_wickets INT,
  // //     player_of_match VARCHAR(255),
  // //     venue VARCHAR(255),
  // //     umpire1 VARCHAR(255),
  // //     umpire2 VARCHAR(255),
  // //     umpire3 VARCHAR(255)
  // //   );
  // // `;

  // // Execute the table creation SQL statement
  // connection.query(createTableSql, (err) => {
  //   if (err) throw err;
  //   console.log("Table created or already exists");

  function convertCsvToJson(csvFilePath) {
    return new Promise((resolve, reject) => {
      csvtojson()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
          resolve(jsonObj);
          // const query =
          //   "INSERT INTO matches (id, season, city, date, team1, team2, toss_winner, toss_decision, result, dl_applied, winner, win_by_runs, win_by_wickets, player_of_match, venue, umpire1, umpire2, umpire3) VALUES ?";
          // ob = jsonObj;
          // const values = jsonObj.map((match) => [
          //   match.id,
          //   match.season,
          //   match.city,
          //   match.date,
          //   match.team1,
          //   match.team2,
          //   match.toss_winner,
          //   match.toss_decision,
          //   match.result,
          //   match.dl_applied,
          //   match.winner,
          //   match.win_by_runs,
          //   match.win_by_wickets,
          //   match.player_of_match,
          //   match.venue,
          //   match.umpire1,
          //   match.umpire2,
          //   match.umpire3,
          // ]);

          // connection.query(query, [values], (err, results) => {
          //   if (err) {
          //     console.error("Error inserting data:", err);
          //   } else {
          //     console.log("Data inserted successfully:", results);
          //   }
          // });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  const csvMatchPath = "Mysql/matches.csv";

  convertCsvToJson(csvMatchPath)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      throw err;
    });

    connection.end();
});
// });
module