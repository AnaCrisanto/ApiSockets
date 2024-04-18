import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import listasRouter from '../src/routes/lista.route.js'

config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('src'));


app.use(listasRouter);

export default app;