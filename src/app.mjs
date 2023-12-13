import express from 'express';
import fetch from 'node-fetch';
const app = express();
const port = 3000;

// Fem que el servidor mostri el contingut de la carpeta public
app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor escoltant al port ${port}`);
});
