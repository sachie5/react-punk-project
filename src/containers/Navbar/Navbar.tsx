import "./Navbar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { ChangeEventHandler, FormEventHandler } from "react";


type NavbarProps = {
    name: string;
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
    handleAbvChange: ChangeEventHandler<HTMLInputElement>;
    handlePhChange: ChangeEventHandler<HTMLInputElement>;
    handleDateChange: ChangeEventHandler<HTMLInputElement>;
    abvChecked: boolean;
    phChecked: boolean;
    dateChecked: boolean;
};

const Navbar = ({ name, handleInput, searchTerm, handleAbvChange, handlePhChange, handleDateChange, abvChecked, phChecked, dateChecked }: NavbarProps) => {
    return (
        <nav className={name}>
            <SearchBox id="search" name="search" placeholder="Type a beer..." handleInput={handleInput} searchTerm={searchTerm} />
            <FiltersList handleAbvChange={handleAbvChange} handlePhChange={handlePhChange} handleDateChange={handleDateChange} abvChecked={abvChecked} phChecked={phChecked} dateChecked={dateChecked} />
        </nav>
    )
};

export default Navbar;