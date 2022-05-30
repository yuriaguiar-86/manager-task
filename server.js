const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/agrow'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/agrow/index.html');
});

app.listen(PORT, () => {
  console.log("Servidor iniciado na porta " + PORT);
})
