import express from "express";

const port = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("123");
};
const handleLogin =(req, res) => {
    return res.send("login here.");
};
app.get("/", handleHome);
app.get("/login", handleLogin);

handleHome

const handleListening = () => console.log(`server Listenting on port http://localhost:${port}`);

app.listen(port, handleListening);

