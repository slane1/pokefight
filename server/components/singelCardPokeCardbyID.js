app.get('/pokemon/:id', (req, res) => {
    const { id } = req.params;
    const pokemon = pokemonData.find(p => p.id === Number(id));
    
    res.json(pokemon || { error: 'Pokemon not found' });
  });