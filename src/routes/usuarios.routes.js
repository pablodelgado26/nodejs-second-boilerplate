import { Router } from "express";
import UsersRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router();

const usersRepository = new UsersRepository();

usuariosRoutes.get("/", (req, res) => {
    const usuarios = usersRepository.getALLUsers();

    return res.status(200).json({
        messege: 
        usuarios.length == 0 
        ? "Nenhum usuário cadastrado" 
        : `total de usuários cadastrados: ${usuarios.length}`,	 
        usuarios,            
    });
});

export default usuariosRoutes;