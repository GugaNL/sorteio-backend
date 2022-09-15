require('dotenv').config();
const express = require("express");
const bodyPaser = require("body-parser");
const app = express();

const handle404Error = require('./src/middlewares/handle404Error');

const usuarioRoute = require('./src/routers/usuario.route');
const clienteRoute = require('./src/routers/cliente.route');
const sorteioRoute = require('./src/routers/sorteio.route');
const bilheteRoute = require('./src/routers/bilhete.route');
const handleError = require('./src/middlewares/handleError');

app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());
app.use('/api/usuario', usuarioRoute);
app.use('/api/cliente', clienteRoute);
app.use('/api/sorteio', sorteioRoute);
app.use('/api/bilhete', bilheteRoute);
app.use(handle404Error);
app.use(handleError);

app.listen(process.env.PORT || 5000, () => {
  console.log("rodando na porta 5000");
});
