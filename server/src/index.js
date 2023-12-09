
// const express = require("express");
// const router = require("./routes/index");

// const server = express();
// const PORT = 3001;

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// server.use(express.json());
// server.use("/rickandmorty", router);

const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

conn.sync({ force: true }).then(() => {
  console.log("DB connect success");
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

