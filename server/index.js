import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';


// Use crypto module functionality here


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ success: true, message: 'Welcome to my server!'});
});

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

const PORT = process.env.PORT || 3000;




const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server started, Listening to localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

startServer();
