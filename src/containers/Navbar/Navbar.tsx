import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { FormEventHandler, MouseEventHandler } from "react";


type NavbarProps = {
    name: string;
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
    handleClick: MouseEventHandler<HTMLInputElement>;
    value: number;
};

const Navbar = ({ name, handleInput, searchTerm, handleClick, value }: NavbarProps) => {
   return ( 
   <nav className={name}>
    <SearchBox id="search" name="search" placeholder="Type a beer..." handleInput={handleInput} searchTerm={searchTerm}/>
    <FiltersList abv={6} ph={4} firstBrewed="" handleClick={handleClick} value={value}/>
    </nav>
    )
};

export default Navbar;