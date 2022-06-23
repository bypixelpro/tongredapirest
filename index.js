import express, { urlencoded, json } from 'express';
const app = express();
import cors from 'cors';
import routes from './src/routes/routes.js';

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
    console.log(`Server listening on port ${app.get('port')}`);
});