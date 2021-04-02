import express  from 'express';
import * as http from 'http';
const app: express.Application = express();
const router = express.Router();
const server: http.Server = http.createServer(app);
const port = 5000

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("Aero Server Running!")

})

app.use(express.json());

server.listen(port, () => {
    console.log(`Server Running at port ${port}`)
})

export default app;


