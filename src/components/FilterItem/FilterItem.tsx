import { MouseEventHandler } from "react";

type FiltersItemProps = {
    id: string;
    name: string;
    label: string;
    handleClick: MouseEventHandler<HTMLInputElement>;
};

const FilterItem = ({ id, name, label, handleClick }: FiltersItemProps) => {
 return (
<><label htmlFor={name} className="nav__label">{label} </label><input type="checkbox" id={id} name={name} value="" onClick={handleClick}/><br /></>
    );
};

export default FilterItem;