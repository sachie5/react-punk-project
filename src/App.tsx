import './App.scss';
import BeerInfo from './containers/BeerInfo/BeerInfo';
import Main from './containers/Main/Main';
import Navbar from './containers/Navbar/Navbar';
import { FormEvent, useState, useEffect, ChangeEvent } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beer } from './types/types';



const App = () => {

    const [beers, setBeers] = useState<Beer[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [abvChecked, setAbvChecked] = useState<boolean>(false);
    const [phChecked, setPhChecked] = useState<boolean>(false);
    const [dateChecked, setDateChecked] = useState<boolean>(false);
    const [abvNumber, setAbvNumber]=useState<number>(0);



    const getBeers = async (abv: number) => {
        const url = `https://api.punkapi.com/v2/beers?page=1&per_page=80&abv_gt=${abv}`;
        const res = await fetch(url);
        const data: Beer[] = await res.json();
        setBeers(data);
      };

    useEffect(() => {
               getBeers(abvNumber); 
        if (searchTerm !== ""){
            setBeers(filterBeers);
/*                     if (abvChecked && beer.abv > 6){
                        return newBeers;
                    } else if(phChecked && beer.ph < 4){
                    return newBeers;
                } else if(dateChecked && Number(beer.first_brewed.slice(-4)) < 2010){
                    return newBeers;
                } 
                return newBeers; */
        };
    }
, [abvChecked, phChecked, dateChecked, searchTerm])


    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const newInput = event.currentTarget.value.replace(" ", "").toLowerCase();
        setSearchTerm(newInput);
    };

    const filterBeers = beers.filter(beer => {
        const newBeers = beer.name.replace(" ", "").toLowerCase().includes(searchTerm);
        return newBeers;
    }
    )

    const handleAbvChange = () => {
        const newAbvChecked = !abvChecked;
        if(newAbvChecked === true){
            setAbvNumber(6);
        }
        else{
            setAbvNumber(0);
        }
        return setAbvChecked(newAbvChecked);
      };
    
      const handlePhChange = () => {
        const newPhChecked = !phChecked;
        return setPhChecked(newPhChecked);
      };

      const handleDateChange = () => {
        const newDateChecked = !dateChecked; 
        return setDateChecked(newDateChecked);
      };

      console.log(beers);

    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                <Route path="/" element={
                <><Navbar name="nav" handleInput={handleInput} searchTerm={searchTerm} handleAbvChange={handleAbvChange} handleDateChange={handleDateChange} handlePhChange={handlePhChange} abvChecked={abvChecked} phChecked={phChecked} dateChecked={dateChecked}/>
                 <Main beers={filterBeers} /></>
                } />
                    <Route path="beers/:beerId" element={<BeerInfo beers={beers} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default App;
