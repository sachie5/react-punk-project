import './App.scss';
import Main from './containers/Main/Main';
import Navbar from './containers/Navbar/Navbar';
import beers from './data/beers';


const App = () => {
    return (
    <div className="app">
        <Navbar name="nav"/>
        <Main beerInfo={beers}/>
    </div>
    )
};

export default App;
