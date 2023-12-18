import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Beer } from "../../types/types";

type NavbarProps = {
    name: string;
};

const Navbar = ({ name }: NavbarProps) => {
   return ( 
   <nav className={name}>
    <SearchBox id="search" name="search" placeholder="Type a beer..." />
    <FiltersList abv={6} ph={4}/>
    </nav>
    )
};

export default Navbar;