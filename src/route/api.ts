/*
get/users
gert/user/:id
post/register/user
put/user/:id
delete/user/:id
*/


import Router from 'express'
import * as endPoint  from '../controller/apiController'


export const  router = Router();

router.get("/ping",endPoint.ping);
router.get("/users",endPoint.users);
router.get("/user/:id",endPoint.user);
router.post("/register/user",endPoint.register);
router.put("/user/:id",endPoint.edit);
router.delete("/delete/user/:id",endPoint.deleteUser)