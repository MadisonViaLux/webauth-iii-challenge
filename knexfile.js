// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/department'
    },
    migrations: {
      directory: './data/migrations',
    },
  },
};
