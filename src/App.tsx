import './App.scss';
import Main from './containers/Main/Main';
import Navbar from './containers/Navbar/Navbar';
import beers from './data/beers'; 
import { FormEvent, useState } from 'react';


const App = () => {

const [ searchTerm, setSearchTerm ] = useState<string>("");

const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const newInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(newInput);
};

    const filteredBeers = beers.filter(beer => {
        return beer.name.toLowerCase().includes(searchTerm.trim());
    })

    return (
    <div className="app">
        <Navbar name="nav" handleInput={handleInput} searchTerm={searchTerm}/>
        <Main beers={filteredBeers}/>
    </div>
    )
};

export default App;
