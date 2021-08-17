import express from "express";
import morgan from "morgan";

const port = 4000;

const app = express();
const logger = morgan("dev");



const home = (req, res) => {
    return res.send("hello");
};
const login = (req,res) => {
    return res.send("login");
}

app.use(logger);
app.get("/login", login)
app.get("/", home);

const handleListening = () => console.log(`server Listenting on port http://localhost:${port}`);

app.listen(port, handleListening);

