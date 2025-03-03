import express from 'express';
import { UsercreateController, UserDeleteController, UserGetAllController, UserGetByIDController, UserLoginController, UserRagistationController, UserUpdateController } from '../controller/UserController.js';



const routers=express.Router();


routers.post('/Ragistetion',UserRagistationController)
routers.post('/Login',UserLoginController)
routers.post('/Create',UsercreateController)
routers.get('/Getall',UserGetAllController)
routers.get('/GetByid/:id',UserGetByIDController)
routers.put('/Update/:id',UserUpdateController)
routers.delete('/delete/:id',UserDeleteController)


export default routers