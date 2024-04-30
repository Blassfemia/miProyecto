import  express  from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'


const app = express();

//https://med-dragones.vercel.app/   cuando este en produccion
//http://localhost:5173              cuando este en desarrollo


app.use(cors({
    origin: 'https://med-dragones.vercel.app',
    credentials: true
}));
app.use(express.json())
app.use(morgan('dev'));
app.use(cookieParser())


//Se realiza el llamado de las rutas
app.use('/api', authRoutes);
app.use('/api', taskRoutes);

export default app;