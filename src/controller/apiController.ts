import {User} from '../instance/userInstance'
import { Request,Response } from "express";

export const ping = (req:Request,res:Response) =>{
    res.json({pong:  true})
}
export const users = async (req:Request,res:Response) =>{
    let users = await User.findAll()
    res.json(users)
}
export const user = async (req:Request,res:Response)=>{
    const {id} =  req.params
    let userId = await User.findByPk(id);
    if(userId){
        res.json({userId})
    }else{

        res.status(403).json({error: "Usuario não existe"})
    }
}   

export const register = async (req:Request,res:Response)=>{
    let {email,password} = req.body;
    let findeData = await User.findOne({
        where:{email,password}
    });
    if(req.body.email && req.body.password){
        if(!findeData){
            let newUser = await User.create(req.body)
            res.status(201).json({sucess: `Usuario ${newUser.id}`})
        }else{
            res.json({error: "Email e/ou senha jaexiste."})
        }
    }else{
        res.json({error: "Digite um email e um password"})
    }
    

}
export const edit = async (req:Request,res:Response)=>{
    let {id} = req.params;
    let {email} = req.body;
    let findData = await User.findByPk(id);
    let findone = await User.findOne({where:{email}});
    if(findone){
        res.json({error: "Email e/ou senha jaexiste."})
    }else{
        if(findData){
            let {email,password} = req.body;
            findData.email = email;
            findData.password = password;
            findData.save()
            res.json({sucess:"dado alterado"})
        }else{
            res.json({error:"Usuário não encontrado"})
        }
    }
    
}

export const deleteUser = async (req:Request,res:Response) =>{
    let {id} =  req.params;
    await User.destroy({
        where:{id}
    })
    res.json({error:`Usuario ${id} deletado com sucesso!`})

}