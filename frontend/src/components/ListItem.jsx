export default function ListItem( {item} ) {

    return (
        <div key={item.id}>
            <p>{item.name.english}</p>
        </div>
    );
}