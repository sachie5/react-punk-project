import { Beer } from "../../types/types";
import { useParams } from "react-router-dom";
import "./BeerInfo.scss";

type BeerInfoProps = {
    beers: Beer[];
};

const BeerInfo = ({ beers }: BeerInfoProps) => {
    console.log(useParams());

    const { beerName } = useParams();

    const beer = beers.find(drink => drink.name === beerName);
    console.log(beer)

    return (
        <article className="beer-info">
            <div className="beer-info__banner">
                <img src={``} className="beer-info__image" alt={``} />
            </div><div className="beer-info__content">
                <h2 className="beer-info__heading">{``}</h2>
                <p>ALBUM-TEXT</p>
                <h2 className="album-info__heading">Facts</h2>
                <ul className="album-info__facts">
                    <li>Mood : {``} </li>
                    <li>Released : {``} </li>
                    <li>Genre : {``} </li>
                    <li>Score : {``} </li>
                </ul>
            </div>
        </article>
    )
};

export default BeerInfo;