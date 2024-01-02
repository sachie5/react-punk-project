import { Beer } from "../../types/types";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./CardList.scss";

type CardListProps = {
    beers: Beer[];
};

const CardList = ({ beers }: CardListProps) => {
    if(beers.length === 0){
        return <p className="default">There are no beers to show.</p>
       } else {
    return (
    <div className="card-container">
       {beers && beers.map(beer => (
        <Link to={`beers/${beer.id}`} key={beer.id}>
            <Card key={beer.id} id={beer.id} name={beer.name} image={beer.image_url} tagline={beer.tagline} description={beer.description}/>
        </Link> 
       ))}
       </div>
    );
}
};

export default CardList;
