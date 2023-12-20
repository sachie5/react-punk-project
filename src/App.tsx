import './App.scss';
import BeerInfo from './containers/BeerInfo/BeerInfo';
import Main from './containers/Main/Main';
import Navbar from './containers/Navbar/Navbar';
import beers from './data/beers';
import { FormEvent, MouseEvent, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {

    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const newInput = event.currentTarget.value.toLowerCase();
        setSearchTerm(newInput);
    };

    const [clickValue, setClickValue] = useState<number>(0);

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        console.log(newValue);
        setClickValue(Number(newValue));
    }

    const filteredBeers = beers.filter(beer => {
        return beer.name.toLowerCase().includes(searchTerm.trim())
    })

    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                <Route path="/" element={
                <><Navbar name="nav" handleInput={handleInput} searchTerm={searchTerm} handleClick={handleClick} value={clickValue} /><Main beers={filteredBeers} /></>
                } />
                    <Route path="beers/:beerId" element={<BeerInfo beers={beers} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default App;
