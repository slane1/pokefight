export default function ListItem( {item} ) {
    const artworkurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`
    // TODO: Place artworkurl in the img src={} attribute and remove it from alt={} attribute
    // TODO: Place the item.name.english in the img alt=""
    return (
        <div key={item.id} className="itemcard">
            <div className="imgcontainer">
                <img src="" alt={artworkurl} />
            </div>
            <div className="txtcontainer">
            <h4>{item.name.english}</h4>
            <p>Pokedex {item.id}</p>
                <div className="types">
                    <p>Types:</p>
                    {item.type.map((item) => (
                        <p>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}