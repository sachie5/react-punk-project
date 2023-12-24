import { MouseEventHandler } from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

type FiltersListProps = {
    handleClick: MouseEventHandler<HTMLInputElement>;
    value: number;
};

const FiltersList = ({ handleClick, value }: FiltersListProps) => {
    return (
        <form className="nav__filter">
            <FilterItem id="filter1" name={value.toString()} label="High ABV (> 6.0%)" handleClick={handleClick} value={6}/>
            <FilterItem id="filter2" name={value.toString()} label="Acidic (ph < 4)" handleClick={handleClick} value={4}/>
            <FilterItem id="filter3" name={value.toString()} label="Classic Range" handleClick={handleClick} value={2010}/>
        </form>
    )
};

export default FiltersList;