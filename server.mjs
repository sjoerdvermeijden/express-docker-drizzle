import express from 'express';
import cors from "cors";

const app = express();

import userRoutes from './routes/userRoutes.mjs'

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

app.listen(5000);
  
  