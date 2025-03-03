import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/connectionDB.js';
import routers from './router/UserRouter.js';


dotenv.config()
const app = express();

connectDb()


const PORT=process.env.PORT||6669


app.use(express.json());
app.use('/api',routers)

app.listen(PORT,()=>{
    console.log(`server start ${PORT}`);
})