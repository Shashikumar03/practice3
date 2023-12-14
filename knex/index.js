const knex = require("./knexConnection");

knex
  .select("season")
  .count("* as matches")
  .from("matches")
  .groupBy("season")
  .then((rows) => {
    a = rows.map((row) => {
      const obj = {
        season: row.season,
        matches: row.matches,
      };
      return obj;
    });
    console.log(a);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    knex.destroy();
  });