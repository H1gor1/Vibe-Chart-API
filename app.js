const express = require('express');
const apiRoutes = require('./api');

const app = express();
const PORT = process.env.PORT || 3030;

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});