import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { FormEventHandler } from "react";

type NavbarProps = {
    name: string;
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
};

const Navbar = ({ name, handleInput, searchTerm }: NavbarProps) => {
   return ( 
   <nav className={name}>
    <SearchBox id="search" name="search" placeholder="Type a beer..." handleInput={handleInput} searchTerm={searchTerm}/>
    <FiltersList abv={6} ph={4}/>
    </nav>
    )
};

export default Navbar;