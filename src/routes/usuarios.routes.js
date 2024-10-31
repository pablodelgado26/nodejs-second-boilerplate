import { Router } from "express";

const usuariosRoutes = Router();

let usuarios = [
    { 
        id: 1, 
        nome: "João", 
        email: "joao@example.com",
    },
    {
        id: 2,
        nome: "Maria",
        email: "maria@example.com"
    }
];

usuariosRoutes.get("/", (req, res) => {
    return res.status(200).json({
        messege: usuarios.length == 0 
        ? "Nenhum usuário cadastrado" 
        : `total de usuários cadastrados: ${usuarios.length}`,	 
        usuarios,            
    });
});

export default usuariosRoutes;