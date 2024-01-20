import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload/config";
import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import {webpackBundler} from '@payloadcms/bundler-webpack'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import path from "path";
import dotenv from 'dotenv'


import { Users } from "./collections/user";
dotenv.config({
    path:path.resolve(__dirname,'../.env'),
})
export default buildConfig({
    serverURL:process.env.NEXT_PUBLIC_SERVER_URL ||" ",
    collections:[Users],
    routes:{
        admin:'/sell'
    },
    admin:{
         user:"users",
        bundler: webpackBundler(),
        meta:{
            titleSuffix:"- kaushikclothstore",
            favicon:"Kaushik cloth store",
            ogImage:'/image/logo.png'
        },
    },
    rateLimit:{
        max:2000,
    },
    editor: lexicalEditor({}),
    db:mongooseAdapter({
        url:process.env.MONGODB_URl!,
    }
    ),
    typescript:{
        outputFile:path.resolve(__dirname, 'payload-types.ts'),
    }
})