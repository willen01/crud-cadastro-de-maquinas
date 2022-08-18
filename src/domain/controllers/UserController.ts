import { Request, Response } from "express";

export class UserController {
    register(req: Request, res: Response){
        res.json();
    }
}

export default new UserController();