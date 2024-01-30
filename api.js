const express = require('express');
const router = express.Router();
const { getVibeMusicas } = require('./request');

router.get('/musicsVibe', async (req, res) => {
  try {
    const musicsVibe = await getVibeMusicas();
    res.json(musicsVibe);
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;