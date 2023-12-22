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


    const getBeers = async (/* beerName: string */) => {
        const url = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;
        const res = await fetch(url);
        const data: Beer[] = await res.json();
        setBeers(data);
      };

      const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const newInput = event.currentTarget.value.replace(" ", "").toLowerCase();
        setSearchTerm(newInput);
    };

    useEffect(() => {
        if(searchTerm === ""){
        getBeers();
        } else {
            setBeers(beers.filter(beer => 
                beer.name.replace(" ", "").toLowerCase().includes(searchTerm)))
        }
    }, [searchTerm])

    console.log(searchTerm)
    console.log(beers.map(beer => console.log(beer.name)))

    const [clickValue, setClickValue] = useState<number>(0);

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        console.log(newValue);
        setClickValue(Number(newValue));
    } 

    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                <Route path="/" element={
                <><Navbar name="nav" handleInput={handleInput} searchTerm={searchTerm} handleClick={handleClick} value={clickValue} />
                 <Main beers={beers} /></>
                } />
                    <Route path="beers/:beerId" element={<BeerInfo beers={beers} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default App;
