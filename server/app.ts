import express from "express";
import graphqlHTTP from "express-graphql";
const app = express();

app.use("/graphql", graphqlHTTP({}));
app.listen(4000, () => {
  console.log("Listening to port number 4000.");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
