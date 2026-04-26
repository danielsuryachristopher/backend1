
const dbConfig = require("../configs/database");

/**
 * @type { import("knex").Knex.Config }
 */
// const config = dbConfig[process.env.NODE_ENV || "development"];
const config = dbConfig["development"];
console.log(config)

// config.seeds

const knex = require("knex")(config);

module.exports = knex;