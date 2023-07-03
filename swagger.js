module.exports = {
  info: {
    title: "Chapter 8 Binar",
    description: "This is a documentation for learning purpose",
    contact: {
      name: "team",
      email: "myteam@binar.org",
    },
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:5009/api/v1",
    },
  ],
  tags: [
    {
      name: "Player",
      description: "player endpoints",
    },
  ],
  filesPattern: "./**/*.js",
  baseDir: __dirname,
  swaggerUIPath: "/swagger",
};
