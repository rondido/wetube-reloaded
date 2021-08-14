import express from "express";

const port = 4000;

const app = express();

const logger =(req,res,next) => {
console.log(`${req.method} ${req.url}`);
    next();
};

const privateMiddleware =(req,res,next) =>{
  const url = req.url;
  if(url == "/protected"){
    return res.send("<h1>Not Allrow</h1>");
  }
  console.log("go to home");
  next();
};

const handleHome = (req, res) => {
    return res.send("i love middleware");
};

const handleProtected =(req,res) =>{
    return res.send("welcome to private logger");
}
app.use(logger);
app.use(privateMiddleware);
app.get("/protected", handleProtected);
app.get("/",  handleHome);

const handleListening = () => console.log(`server Listenting on port http://localhost:${port}`);

app.listen(port, handleListening);

