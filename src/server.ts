import express from "express";

import "./database/"; // Cria conexão
import { routes } from "./routes";

const app = express();

app.use(express.json());

const port = 4444;

app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
