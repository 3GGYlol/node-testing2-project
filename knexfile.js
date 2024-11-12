// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/planets.db3'
      },
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
      useNullAsDefault: true
    },
  
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/test.db3'
      },
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
      useNullAsDefault: true
    },
  
    production: {
  
    }
  
  };