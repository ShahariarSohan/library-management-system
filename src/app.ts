import express, { Application } from 'express';
import cors from 'cors'
import bookRoute from './modules/book/book.controller';
import borrowRoute from './modules/borrow/borrow.controller';
const app: Application = express();

app.use(express.json())
app.use(cors())

app.use("/", bookRoute)
app.use("/",borrowRoute)

export default app;