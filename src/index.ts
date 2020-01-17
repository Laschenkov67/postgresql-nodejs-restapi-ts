import express from 'express';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(3000, ()=>{
    console.log('Server on port', 3000);
})