import {Response, Request} from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {
    async handle(request: Request, response: Response){
        const listUserService = new ListUsersService();
        const users = await listUserService.execute();

        return response.json(users);
    }
}

export { ListUsersController }