import express, { urlencoded, json } from 'express';
import cors from 'cors';
import routes from './src/routes/routes.js';

const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(cors({
    origin: 'https://pedidos.tongil.es'
}));
app.use(urlencoded({extended:false}));
app.use(json());

routes(app);

//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Servidor activo en puerto: ${app.get('port')}`);
});