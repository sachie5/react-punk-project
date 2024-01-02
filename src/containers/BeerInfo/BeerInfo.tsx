import { Beer } from "../../types/types";
import { Link, useParams } from "react-router-dom";
import "./BeerInfo.scss";

type BeerInfoProps = {
    beers: Beer[];
};

const BeerInfo = ({ beers }: BeerInfoProps) => {
    const { beerId } = useParams();

    const beer = beers.find(drink => drink.id.toString() === beerId);

    if(beer === undefined) return <p>Couldn't find the beer in the directory.</p>;

    const malt = [...new Set(beer.ingredients.malt.map(malt => malt.name))];
    const hops = [...new Set(beer.ingredients.hops.map(hops => hops.name))];
    

    return (
        <article className="beer-info">
            <Link to="/" key={beer.id}><button className="beer-info__button">Return to Home</button></Link>
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
                    <li className="list-item1" key={`malt-name${beer.id}`}>Malt : {`${malt.map(malt => ` ${malt}`)} `} </li>
                    <li className="list-item2" key={`hops-name${beer.id}`}>Hops : {`${hops.map(hops => ` ${hops}`)} `} </li>
                    <li className="list-item3" key={`yeast-name${beer.id}`}>Yeast : {`${beer.ingredients.yeast} `} </li>
                </ul>
                <h4 className="beer-info__extras--heading">Food Pairings:</h4>
                <ul className="beer-info__extras--food">
                    {beer.food_pairing.map(pairing => <li key={`food-${pairing}`}>{`${ pairing}`}</li>)}
                </ul>
            </div>
        </article>
    )
};

export default BeerInfo;