// import { Request, Response } from "express";
// import { Users } from "../models/users.model";
// import { error } from "console";


// export const fetchUser = async (req: Request, res: Response) => {
//   try {
    
//     const { email } = req.body;
//     const user = await Users.findOne({ email: email })
//     if (!user) {
      
//       res.status(404).json(new error({message: "error"}))
//     }
//     res.status(200).json({message: "User found."})
  
//   } catch (error) {
//     console.log(error);

//   }
// }