import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import {compare} from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAutheticateResquest {
    email: string;
    password: string;
}

class AuthenticateUserService {


    async execute({email, password}: IAutheticateResquest){
        const userRepositories = getCustomRepository(UsersRepositories);
        
        // Verificar se email existe
        const user = await userRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error("Email or Password incorrect")
        }
        // Verificar se senha está correta

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email or Password incorrect")
        }
        // Gerar token

        const token = sign(
            {
            email: user.email,

        }, 
        "55bb064c61400e79e2c3a42328f62ff3", 
        {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService }