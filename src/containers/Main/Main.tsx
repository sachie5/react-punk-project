import CardList from "../../components/CardList/CardList";
import Button from "../../components/Button/Button";
import { Beer } from "../../types/types";
import { MouseEventHandler } from "react";


type MainProps = {
    beers: Beer[];
    handleButtonClick: MouseEventHandler<HTMLButtonElement>;
};

const Main = ({ beers, handleButtonClick }: MainProps) => {
 return (
    <main className="main" key="main-page">
    <CardList beers={beers}/>
    <div className="button-container">
    <Button name="Prev" id="previous" onClick={handleButtonClick} value="previous"/>
    <Button name="Next" id="next" onClick={handleButtonClick} value="next"/>
    </div>
    </main>
 )
};

export default Main;