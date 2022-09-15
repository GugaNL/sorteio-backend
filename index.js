const express = require("express");
const app = express();

const router = express.Router();
const usuarioController = require("./src/controllers/usuario.controller");


const bodyPaser = require("body-parser");
const port = process.env.PORT || 3000;

const handle404Error = require("./src/middlewares/handle404Error");
const handleError = require("./src/middlewares/handleError");
//const usuarioRoute = require("./src/routers/usuario.route");
// const clienteRoute = require("./src/routers/cliente.route");
// const sorteioRoute = require("./src/routers/sorteio.route");
// const bilheteRoute = require("./src/routers/bilhete.route");

app.get("/", function(req, res) {
    res.send("Funcionou!")
})

app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());
app.use(handle404Error);
app.use(handleError);
// app.use('/api/usuario', usuarioRoute);
// app.use('/api/cliente', clienteRoute);
// app.use('/api/sorteio', sorteioRoute);
// app.use('/api/bilhete', bilheteRoute);

app.listen(port, () => {
  console.log("rodando na porta 3000");
});
