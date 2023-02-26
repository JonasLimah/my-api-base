import express, {Request,Response} from 'express';
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './route/api';

dotenv.config();
const server =  express();


server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({extended:true}));


server.use(router)
server.use(cors)


console.log("it's running")

server.listen(process.env.PORT);


