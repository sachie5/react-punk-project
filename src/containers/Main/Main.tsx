import CardList from "../../components/CardList/CardList";
import { Beer } from "../../types/types";

type MainProps = {
    beerInfo: Beer[];
};

const Main = ({ beerInfo }: MainProps) => {
 return (
    <main className="main-page" key="main-page">
        <CardList beers={beerInfo}/>
    </main>
 )
};

export default Main;