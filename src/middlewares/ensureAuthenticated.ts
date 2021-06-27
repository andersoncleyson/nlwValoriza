import {Request, Response, NextFunction, request} from 'express';
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Receber o Token
    const authToken = request.headers.authorization;
    
    // Validar se token esta preenchido

    if(!authToken){
        return response.status(401).end();
    }
    
    // Validar se token é válido
    const [, token] = authToken.split(" ");

    try {
        const {sub} = verify(token, "5bb064c61400e79e2c3a42328f62ff3") as IPayLoad;

        // Recuperar infomações do usuário
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }
}
    

    

    