//import 파일들 따로 정의하는 곳
import "./db";
import "./models/Video";
import app from "./server"

const port = 4000;
const handleListening = () => console.log(`server Listenting on port http://localhost:${port}`);

app.listen(port, handleListening);