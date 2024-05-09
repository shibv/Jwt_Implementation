import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import authRoutes from './routes/auth.route.js'
import {Connection} from './database/db.js'
import cookieParser from 'cookie-parser';
const app = express();
app.use(cors(
    {
        origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
        methods: ['GET', 'POST'],
        credentials: true
    }
));
app.use(express.json());
app.use(cookieParser());

 Connection();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api', authRoutes);

app.listen(3000, () => console.log('Example app listening on port 3000!'));