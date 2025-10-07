import express, { Request, Response } from "express";
import morgan from "morgan";
import { logger } from "./middlewares/logger";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev")); // Morgan para logs HTTP
app.use(logger); // Nosso logger customizado

// Rotas
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Rota principal
app.get("/", (req: Request, res: Response) => {
    res.send("API Gestão Quanti - Módulos de Usuários e Produtos!");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 🚀");
});