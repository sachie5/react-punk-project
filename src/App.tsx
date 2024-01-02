import './App.scss';
import BeerInfo from './containers/BeerInfo/BeerInfo';
import Main from './containers/Main/Main';
import Navbar from './containers/Navbar/Navbar';
import { FormEvent, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beer } from './types/types';



const App = () => {

    //Format date for parameter
    const todayDate = new Date();
    const formatDate = (date: Date) => {
        let month = date.getMonth() + 1;
        const year = date.getFullYear();
        let newDate = `${month}-${year}`
        if (month < 10) {
            newDate = `0${month}-${year}`
        }
        return newDate;
    };
    const currentDate = formatDate(todayDate);


    const [beers, setBeers] = useState<Beer[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [abvChecked, setAbvChecked] = useState<boolean>(false);
    const [phChecked, setPhChecked] = useState<boolean>(false);
    const [dateChecked, setDateChecked] = useState<boolean>(false);
    const [abvNumber, setAbvNumber] = useState<number>(0);
    const [brewedDate, setBrewedDate] = useState<string>(currentDate);
    /*    const [pageNumber, setPageNumber] = useState<number>(0); */

    const getBeers = async (abv: number, date: string) => {
        const beersData: Beer[] = [];
        for (let pageNo = 1; pageNo < 11; pageNo++) {
            const url = `https://api.punkapi.com/v2/beers?brewed_before=${date}&abv_gt=${abv}&page=${pageNo}`;
            const res = await fetch(url);
            const data: Beer[] = await res.json();
            ; beersData.push(...data);
        }
        setBeers(beersData);
        console.log(beersData);
    };

    useEffect(() => {
        getBeers(abvNumber, brewedDate);
    }
        , [abvNumber, brewedDate])

    // Filter beers based on search term and ph
    const filterBeers = beers.filter(beer => {
        if (phChecked) {
            return beer.name.replace(" ", "").toLowerCase().includes(searchTerm) && beer.ph < 4;
        }
        return beer.name.replace(" ", "").toLowerCase().includes(searchTerm);
    }
    )

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const newInput = event.currentTarget.value.replace(" ", "").toLowerCase();
        setSearchTerm(newInput);
    };

    const handlePhChange = () => {
        const newPhChecked = !phChecked;
        setPhChecked(newPhChecked);
    };

    // High ABV filter
    const handleAbvChange = () => {
        const newAbvChecked = !abvChecked;
        if (newAbvChecked === true) {
            setAbvNumber(6);
        }
        else {
            setAbvNumber(0);
        }
        return setAbvChecked(newAbvChecked);
    };

    // Classic range filter
    const handleDateChange = () => {
        const newDateChecked = !dateChecked;
        if (newDateChecked === true) {
            setBrewedDate("01-2010");
        } else {
            setBrewedDate(currentDate);
        }
        return setDateChecked(newDateChecked);
    };

    // Change page with additional beers
    /*     const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
            if (event.currentTarget.id === "previous") {
                if (pageNumber > 1) {
                    setPageNumber(pageNumber - 1);
                }
            } else {
                if (beers && beers.length > 0) {
                    setPageNumber(pageNumber + 1);
                }
            }
        }; */

    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={
                        <><Navbar name="nav" handleInput={handleInput} searchTerm={searchTerm} handleAbvChange={handleAbvChange} handleDateChange={handleDateChange} handlePhChange={handlePhChange} abvChecked={abvChecked} phChecked={phChecked} dateChecked={dateChecked} />
                            <Main beers={filterBeers} handleButtonClick={handleAbvChange} /></>
                    } />
                    <Route path="beers/:beerId" element={<BeerInfo beers={beers} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default App;
