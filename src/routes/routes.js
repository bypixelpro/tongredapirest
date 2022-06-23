import {DBFFile} from 'dbffile';

const routes = (app) => {
    //Facturado consolidado
        app.get('/:codvend', async(req, res) => {   
            const dbfFile = '/A_F_C.DBF';
            const codVend = req.params.codvend;
            endpointData(codVend, res, dbfFile);
        })
    //Facturado No consolidado
        app.get('/nocon/:codvend', async(req, res) => {  
            const dbfFile = '/A_FPC.DBF';
            const codVend = req.params.codvend;
            endpointData(codVend, res, dbfFile); 
        })
    //Meta
        app.get('/meta/:codvend', async(req, res) => {   
            const dbfFile = '/METACT.dbf';
            const codVend = req.params.codvend;
            endpointData(codVend, res, dbfFile);
        })
}

//Método genérico
async function endpointData(codVend, res, dbfFile){
    const dir = './src/dbfs/';
    let dbf = await DBFFile.open(dir + dbfFile);
    let records = await dbf.readRecords(100000);
    let codVendedor = codVend;
    let vendedorData = records.filter(obj => obj.C_V == codVendedor);
    vendedorData.reverse()
    res.json(vendedorData);
}

export default routes;