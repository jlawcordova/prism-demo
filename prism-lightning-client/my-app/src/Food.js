import './Food.css';

function Food(props) {
    return (
        <div className='Food'>
            <h2>{props.name}</h2>
            <img src={`${props.imageUrl}?random=${Math.round(Math.random() * 1000)}`} alt={props.name}></img>
            <p className='Price'>{props.price} Php</p>
        </div>
    );
}

export default Food;