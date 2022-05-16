import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
// app.use(cors({ Fala qual endereço de front-end pode acessar
//     origin:'http://localhost:3333'
// }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT ||3333, ()=>{
    console.log("Servidor React");
});

