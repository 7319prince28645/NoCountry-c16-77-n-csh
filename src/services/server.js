// En tu servidor de desarrollo (por ejemplo, `server.js`)
const express = require('express');
const cors = require('cors');

const app = express();

// Habilita CORS para todas las solicitudes
app.use(cors());

app.listen(5173, () => {
  console.log('Server listening on http://localhost:5173');
});