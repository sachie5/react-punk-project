import { ChangeEventHandler } from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

type FiltersListProps = {
  handleAbvChange: ChangeEventHandler<HTMLInputElement>;
  handleDateChange: ChangeEventHandler<HTMLInputElement>;
  handlePhChange: ChangeEventHandler<HTMLInputElement>;
  abvChecked: boolean;
  phChecked: boolean;
  dateChecked: boolean;
};

const FiltersList = ({
  handleAbvChange,
  handlePhChange,
  handleDateChange,
  abvChecked,
  phChecked,
  dateChecked,
}: FiltersListProps) => {
  return (
    <form className="nav__filter">
      <FilterItem
        key="abvfilter"
        id="filter1"
        name="abv"
        label="High ABV (> 6.0%)"
        onChange={handleAbvChange}
        checked={abvChecked}
      />
      <FilterItem
        key="phfilter"
        id="filter2"
        name="ph"
        label="Acidic (ph < 4)"
        onChange={handlePhChange}
        checked={phChecked}
      />
      <FilterItem
        key="rangefilter"
        id="filter3"
        name="range"
        label="Classic Range"
        onChange={handleDateChange}
        checked={dateChecked}
      />
    </form>
  );
};

export default FiltersList;
