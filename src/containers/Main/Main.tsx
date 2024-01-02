import CardList from "../../components/CardList/CardList";
import { Beer } from "../../types/types";
import "./Main.scss";


type MainProps = {
    beers: Beer[];
};

const Main = ({ beers }: MainProps) => {
 return (
    <main className="main" key="main-page">
    <CardList beers={beers}/>
    <div className="button-container">
    </div>
    </main>
 )
};

export default Main;