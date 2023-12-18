import { Beer } from "../../types/types";
import Card from "../Card/Card";
import "./CardList.scss";

type CardListProps = {
    beers: Beer[];
};

const CardList = ({ beers }: CardListProps) => {
    return (
    <div className="card-container">
       {beers.map(beer => (
        <Card key={beer.id} id={beer.id} name={beer.name} image={beer.image_url} tagline={beer.tagline} description={beer.description}/>
       ))}
       </div>
    );
};

export default CardList;
