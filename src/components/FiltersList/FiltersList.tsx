import { MouseEventHandler } from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

type FiltersListProps = {
    abv: number;
    ph: number;
    firstBrewed: string;
    handleClick: MouseEventHandler<HTMLInputElement>;
};

const FiltersList = ({ abv , ph, firstBrewed, handleClick }: FiltersListProps) => {
    return (
        <form className="nav__filter">
            <FilterItem id="filter1" name={abv.toString()} label="High ABV (> 6.0%)" handleClick={handleClick}/>
            <FilterItem id="filter2" name={ph.toString()} label="Acidic (ph < 4)" handleClick={handleClick}/>
            <FilterItem id="filter3" name={firstBrewed} label="Classic Range" handleClick={handleClick}/>
        </form>
    )
};

export default FiltersList;