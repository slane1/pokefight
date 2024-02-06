app.get('/:id/:info', (req, res) => {
    const { id, info } = req.params;
    const pokemon = pokemonData.find(p => p.id === Number(id));
    
    if (!pokemon) {
      return res.status(404).json({ error: 'Pokemon not found' });
    }
  
    const selectedInfo = pokemon[info];
  
    if (selectedInfo !== undefined) {
      res.json({ [info]: selectedInfo });
    } else {
      res.status(400).json({ error: 'Invalid information requested' });
    }
  });