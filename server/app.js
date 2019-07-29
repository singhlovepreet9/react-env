const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/graphql", { useNewUrlParser: true })
  .then(() => console.log("connected to mongodb....."))
  .catch(err => console.log("could not connect ot mongodb", err));
const app = express();
app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
app.listen(4000, () => {
  console.log("Listening to port 4000............");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
