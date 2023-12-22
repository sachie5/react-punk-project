import './App.scss';
import BeerInfo from './containers/BeerInfo/BeerInfo';
import Main from './containers/Main/Main';
import Navbar from './containers/Navbar/Navbar';
import { FormEvent, MouseEvent, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beer } from './types/types';



const App = () => {

    const [beers, setBeers] = useState<Beer[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    
    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const newInput = event.currentTarget.value.trim().toLowerCase();
        setSearchTerm(newInput);
    };

    const getBeers = async () => {
        const url = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;
        const res = await fetch(url);
        const data: Beer[] = await res.json();
        setBeers(data);
      };

    useEffect(() => {
        getBeers();
    }, [beers])

    const [clickValue, setClickValue] = useState<number>(0);

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        console.log(newValue);
        setClickValue(Number(newValue));
    } 

/*     const filteredBeers = beers.filter(beer => {
        return beer.name.toLowerCase().includes(searchTerm.trim())
    }) */

    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                <Route path="/" element={
                <><Navbar name="nav" handleInput={handleInput} searchTerm={searchTerm} handleClick={handleClick} value={clickValue} />
                {beers && <Main beers={beers} />}</>
                } />
                    {/* <Route path="beers/:beerId" element={{<BeerInfo beers={beers} />}} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default App;
