require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/clientes', require('./routes/clientesRoutes'));
app.use('/api/sucursales', require('./routes/sucursalesRoutes'));
app.use('/api/empleados', require('./routes/empleadosRoutes'));
app.use('/api/proveedores', require('./routes/proveedoresRoutes'));
app.use('/api/productos', require('./routes/productosRoutes'));
app.use('/api/ventas', require('./routes/ventasRoutes'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
