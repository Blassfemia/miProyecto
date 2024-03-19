 import  User  from "../models/user.model.js";
 import bcrypt from "bcryptjs";
 import { createAccessToken } from "../libs/jwt.js";

export const register = async (req,res) => {
    const {password, username, email} = req.body

     try {

        const passwordHash = await bcrypt.hash(password, 10)//realiza proceso de encriptacion del password

         const newUser = new User ({
             username,
             email,
             password: passwordHash
            
         });

         const userSaved = await newUser.save();
         const token = await createAccessToken({id: userSaved._id})

         res.cookie("token", token);
         
        //mostrar la informacion que se desea visualizar 
         res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
         });

     } catch (error) {
         res.status(500).json({message: error.message});
     }
 };

 export const login = async (req,res) => {
    const {password, email} = req.body

     try {

        const userFound = await User.findOne({email})
        if (!userFound) return res.status(400).json({message: "Usuario no encontrado"}) //valida si se encuentra el usuario registrado 


        const isMatch = await bcrypt.compare(password, userFound.password)//Realiza el proceso de comparacion de el password con el usuario encontrado 
        if (!isMatch) return res.status(400).json({message: "Password Erroneo"})

        const token = await createAccessToken({id: userFound._id}) //crea el token del usuario encontrado 

        res.cookie("token", token);
         
        //mostrar la informacion que se desea visualizar 
         res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
         });

     } catch (error) {
         res.status(500).json({message: error.message});
     }
 };

 export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sentStatus(200);
 }