import { MouseEventHandler } from "react";

type FiltersItemProps = {
    id: string;
    name: string;
    label: string;
    handleClick: MouseEventHandler<HTMLInputElement>;
    value: number;
};

const FilterItem = ({ id, name, label, handleClick, value }: FiltersItemProps) => {
 return (
<><label htmlFor={name} className="nav__label">{label} </label><input type="checkbox" id={id} name={name} value={value} onClick={handleClick}/><br /></>
    );
};

export default FilterItem;