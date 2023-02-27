import {Request,Response,NextFunction} from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();
// o objeto auth serve como private de uma rota por isso criamos esse middleware
export const Auth = {
    private: async (req:Request,res:Response,next:NextFunction) =>{
        let sucess = false;
        //parte para verificar se foi enviado uma authorization via headers
        if(req.headers.authorization){
            
            const [authType,token] = req.headers.authorization.split(" ");//criamos nossas variaveis 
            if(authType === "Bearer"){
                //validação do  Token
                try{
                    //processo de verificação do token e da chave privada
                    JWT.verify(
                        token,
                        process.env.JWT_TOKEN as string
                    );
                    
                    sucess = true;
                }catch(err){err}    
                
                }
        }
        if(sucess){
            next()
        }else{
            res.status(403).json({error:"nao autorizado"})
        }
    }



}