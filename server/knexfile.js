module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/community-forum',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
  },
};
