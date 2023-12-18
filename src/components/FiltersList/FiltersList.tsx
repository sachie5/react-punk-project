import FilterItem from "../FilterItem/FilterItem";

type FiltersListProps = {
    abv: number;
    ph: number;
};

const FiltersList = ({ abv , ph }: FiltersListProps) => {
    return (
        <form className="nav__filter">
            <FilterItem id="filter1" name={abv.toString()} label="High ABV (> 6.0%)"/>
            <FilterItem id="filter2" name={ph.toString()} label="Acidic (ph < 4)"/>
        </form>
    )
};

export default FiltersList;