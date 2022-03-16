import express from "express";
import fibonacciRouter from './fibonacciRoute';
const cors = require("cors");

const app = express();


app.get("/", (req, res) => {
    res.send("Tango API");
})
app.use(cors());
app.use("/fibonacci", fibonacciRouter)

export default app;