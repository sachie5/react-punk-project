import { Beer } from "../../types/types";

type CardProps = {
    id: number;
    name: string;
    image: string;
    tagline: string;
    description: string;
}

const Card = ({ id, name, image, tagline, description } : CardProps) => {
    return (
        <div className="beer-card" key={id}>
            <img src={image} alt={name} />
            <div className="beer-card__info">
            <h1 className="beer-card__name">{name}</h1>
            <h2 className="beer-card__tagline">{tagline}</h2>
            <p className="beer-card__description">{description}</p>
            </div>
        </div>
    );
}

export default Card;