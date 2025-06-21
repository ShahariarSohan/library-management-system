import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import bookRoute from './modules/book/book.controller';
import borrowRoute from './modules/borrow/borrow.controller';
const app: Application = express();

app.use(express.json())
app.use(cors())

app.use("/", bookRoute)
app.use("/", borrowRoute)

app.get("/", (req: Request, res: Response) => {
    res.send("This is a Library Management Server")
})

export default app;