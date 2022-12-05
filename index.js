require('dotenv').config();
const express = require("express");
const bodyPaser = require("body-parser");
const app = express();
const appWs = require('./src/websocket/ws');
const cors = require('cors');

//Middlewares
const handle404Error = require('./src/middlewares/handle404Error');

//Routes
const usuarioRoute = require('./src/routers/usuario.route');
const clienteRoute = require('./src/routers/cliente.route');
const sorteioRoute = require('./src/routers/sorteio.route');
const bilheteRoute = require('./src/routers/bilhete.route');
const paymentinfoRoute = require('./src/routers/paymentinfo.route');
const paymentRoute = require('./src/routers/payment.route');
const imagemRoute = require('./src/routers/imagem.route');
const handleError = require('./src/middlewares/handleError');

app.use(cors());
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());
app.use('/api/usuario', usuarioRoute);
app.use('/api/cliente', clienteRoute);
app.use('/api/sorteio', sorteioRoute);
app.use('/api/bilhete', bilheteRoute);
app.use('/api/paymentinfo', paymentinfoRoute);
app.use('/api/payment', paymentRoute);
app.use('/api/imagem', imagemRoute);
app.use(handle404Error);
app.use(handleError);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("rodando");
});

//Caso esteja rodando em canal HTTPS deve-se usar o protocolo wss:// para funcionar
appWs(server);