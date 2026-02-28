const express = require("express");
const cors = require("cors");
require("dotenv").config();

const postgraphileUse = require("./config/postgraphile");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(postgraphileUse);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor funca en http://localhost:${port}/graphiql`);
});
