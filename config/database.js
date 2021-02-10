module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "localhost",
        port: 5432,
        database: "elcdash",
        username: "admin",
        password: "secret",
      },
      options: {
        ssl: false,
      },
    },
  },
});
