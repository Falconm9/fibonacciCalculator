import express from "express";
const cors = require("cors");
const fibonacciRouter = require("./fibonacciRoute");

const app = express();
const port = 8080;


app.get("/", (req, res) => {
    res.send("Tango API");
})
app.use(cors());
app.use("/fibonacci", fibonacciRouter)

app.listen(port, () => console.log(`Server started https://localhost/:${port}`))