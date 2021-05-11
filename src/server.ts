import express from "express";

const app = express();

const port = 4444;

app.get("/", (request, response) => {
  return response.json({ message: "olá nlw 05" });
});

app.post("/", (request, response) => {
  return response.json({ message: "criado com sucesso" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
