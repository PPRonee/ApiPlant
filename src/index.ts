import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", //'http://localhost:3000',
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  })
);

app.listen(8080, () => {
  console.log("L'api tourne sur http://localhost:8080");
});
