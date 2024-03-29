import { AuthCredentialsValidator } from "@/lib/validators/account-creaditios-validators";
import {publicProcedure, router} from "./trpc";
import { getPayloadClient } from "@/get-Payload";
import { TRPCError } from "@trpc/server";
export const authRouter = router ({
    createPayloadUser:publicProcedure.input(AuthCredentialsValidator)
    .mutation(async ({input}) =>{
        const {email, password} = input
        const payload = await  getPayloadClient()
         const {docs : users} = await   payload.find({
            collection:"users",
            where:{
                email:{
                    equals:email,
                },
            },

         }) ;
         if(users.length  !== 0)
         throw new TRPCError({ code :"CONFLICT"})

     await payload.create({
        collection:"users",
           data:{},

     })
     



    }),
})