import { MouseEventHandler } from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

type FiltersListProps = {
    abv: number;
    ph: number;
    firstBrewed: string;
    handleClick: MouseEventHandler<HTMLInputElement>;
    value: number;
};

const FiltersList = ({ abv , ph, firstBrewed, handleClick, value }: FiltersListProps) => {
    return (
        <form className="nav__filter">
            <FilterItem id="filter1" name={abv.toString()} label="High ABV (> 6.0%)" handleClick={handleClick} value={value}/>
            <FilterItem id="filter2" name={ph.toString()} label="Acidic (ph < 4)" handleClick={handleClick} value={value}/>
            <FilterItem id="filter3" name={firstBrewed.toString()} label="Classic Range" handleClick={handleClick} value={value}/>
        </form>
    )
};

export default FiltersList;