import express from "express";
import cors from "cors";
import TodoRoute  from "./Routes/TodoRoute.js";

const app=express();

app.use(cors());
app.use(express.json());
app.use(TodoRoute);

app.listen(5000, () => console.log(`Server up and running!.`))