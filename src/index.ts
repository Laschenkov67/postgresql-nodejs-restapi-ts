import express from 'express';
import userRouter from './routes/userRoutes'

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(userRouter);

app.listen(3000, ()=> {
    console.log('Server on port', 3000);
});