import { Request, Response } from "express";
import { Product } from "../models/Product";

const products: Product[] = [
    { id: 1, name: "Notebook", price: 2500.00 },
    { id: 2, name: "Mouse", price: 45.90 },
    { id: 3, name: "Teclado", price: 120.50 }
];

export const getProducts = (req: Request, res: Response): void => {
    res.json(products);
};

export const getProductById = (req: Request, res: Response): void => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        res.status(404).json({ message: "Produto não encontrado" });
        return;
    }
    
    res.json(product);
};
