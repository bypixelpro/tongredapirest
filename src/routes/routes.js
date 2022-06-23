import {DBFFile} from 'dbffile';
const dir = './src/dbfs/';

const routes = (app) => {
    //Facturado consolidado
app.get('/:codvend', async(req, res) => {   
    let dbf = await DBFFile.open(dir +'A_F_C.DBF');
    let records = await dbf.readRecords(100000);
    let codVendedor = req.params.codvend;
    let vendedorData = records.filter(obj => obj.C_V == codVendedor);
    res.json(vendedorData);
})
//Facturado No consolidado
app.get('/nocon/:codvend', async(req, res) => {   
    let dbf = await DBFFile.open(dir + '/A_FPC.DBF');
    let records = await dbf.readRecords(100000);
    let codVendedor = req.params.codvend;
    let vendedorDataNo = records.filter(obj => obj.C_V == codVendedor);
    res.json(vendedorDataNo);
})
//Meta
app.get('/meta/:codvend', async(req, res) => {   
    let dbf = await DBFFile.open(dir + 'METACT.dbf');
    let records = await dbf.readRecords(100000);
    let codVendedor = req.params.codvend;
    let vendedorMeta = records.filter(obj => obj.C_V == codVendedor);
    res.json(vendedorMeta);
})
}

export default routes;