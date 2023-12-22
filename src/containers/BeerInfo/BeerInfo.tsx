import { Beer } from "../../types/types";
import { Link, useParams } from "react-router-dom";
import "./BeerInfo.scss";

type BeerInfoProps = {
    beers: Beer[];
};

const BeerInfo = ({ beers }: BeerInfoProps) => {
    const { beerId } = useParams();

    const beer = beers.find(drink => drink.id.toString() === beerId);

    if(beer === undefined) return <p>Couldn't find the beer in the directory.</p>

    return (
        <article className="beer-info">
            <Link to="/"><button className="beer-info__button">Return to Home</button></Link>
                <img src={`${beer?.image_url}`} className="beer-info__image" alt={`${beer.name}`} />
            <div className="beer-info__main">
                <h2 className="beer-info__main--name">{`${beer.name}`}</h2>
                <p className="beer-info__main--extra">{`ABV: ${beer.abv} pH: ${beer.ph}`}</p>
            </div>
            <div className="beer-info__facts">
                <h3 className="beer-info__facts--tagline">{`${beer.tagline}`}</h3>
                <p className="beer-info__facts--description">{`${beer.description}`}</p>
                </div>
                <div className="beer-info__extras">
                <h4 className="beer-info__extras--heading">Ingredients:</h4>
                <ul className="beer-info__extras--ingredients"> 
                    <li>Malt : {`${beer.ingredients.malt.map(malt => malt.name)}`} </li>
                    <li>Hops : {`${beer.ingredients.hops.map(hops => hops.name)}`} </li>
                    <li>Yeast : {`${beer.ingredients.yeast}`} </li>
                </ul>
                <h4 className="beer-info__extras--heading">Food Pairings:</h4>
                <ul className="beer-info__extras--food">
                    {beer.food_pairing.map(pairing => <li>{`${ pairing}`}</li>)}
                </ul>
            </div>
        </article>
    )
};

export default BeerInfo;