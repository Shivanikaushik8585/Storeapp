"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { trpc } from "@/trpc/client";
import { error } from "console";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import{zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod";
const Page = () => {
  
  const AuthCreadentialsValidation = z.object({
    email:z.string().email(),
    password:z.string().min(8,{message:"password must be at least 8 characters long"}),
  })
  type  TAuthCreadentialsValidation = z.infer<typeof AuthCreadentialsValidation>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:zodResolver(AuthCreadentialsValidation),
  });
  const {data} = trpc.anyApiRoute.useQuery()

  console.log(data)  
  const onSubmit = ({
        email,
        password,
      }: TAuthCreadentialsValidation) => {
        // mutate({ email, password })
      }
      
    
    return ( 
        <>
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col items-center space-y-2 text-center">
                <h1 className="text-blue-500 text-2xl font-bold">KAUSHIK CLOTH  STORE</h1>
                <h2 className=" font-bold">Create an Account</h2> 
               
            </div>
            <div className="grid gap-6">
                {/* <form  onSubmit={handleSubmit(onSubmit)}>
                 */}
                 <form>
                    <div className="grid gap-2">
                        <div className="grid gap-1 py-2">
                            <Label htmlFor="email" >Email</Label>
                            <Input {...register("email")} className={cn({'focus-visible:ring-red-500':errors.email,})}
                            placeholder="you@example.com"/>
                        </div>
                        <div className="grid gap-1 py-2">
                            <Label htmlFor="password" >Password</Label>
                            <Input {...register("password")} className={cn({'focus-visible:ring-red-500':errors.password,})}
                            placeholder="password"/>
                        </div>
                    <Button>Sign up</Button>
                <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5',
              })}
              href='/sign-in'>
              Already have an account? Sign-in
              <ArrowRight className='h-4 w-4' />
            </Link>
                    </div>
                </form>
            </div>
            </div>  
        </div>
        </>
     );
}
 
export default Page