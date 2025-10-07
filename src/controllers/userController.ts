import { Request, Response } from "express";
import { User } from "../models/user";

const users: User[] = [
    {id: 1, name: "Lucas"},
    {id: 2, name: "Talita"}    
];

export const getUsers = (req: Request, res: Response): void => {
    res.json(users);
};
