import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
import { connect } from "./connect/connect.js";
const app = express();

import client from "./routes/client.js";
import sale from "./routes/sale.js";
import generals from "./routes/general.js";

import management from "./routes/management.js";

connect();

app.use(cors({ origin: process.env.FRONT }));
app.use(express.json());

app.use("/client", client);
app.use("/management", management);
app.use("/sale", sale);
app.use("/general", generals);

app.listen(process.env.PORT, () => {
  console.log("app connected");
});
