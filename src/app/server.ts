import express from "express";

const PORT = 8080 || process.env.PORT;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})