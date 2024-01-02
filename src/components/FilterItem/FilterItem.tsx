import { ChangeEventHandler } from "react";

type FiltersItemProps = {
    id: string;
    name: string;
    label: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
};

const FilterItem = ({ id, name, label, onChange, checked }: FiltersItemProps) => {
 return (
<><label htmlFor={name} className="nav__label">{label} </label><input type="checkbox" id={id} name={name}  onChange={onChange} checked={checked}/><br /></>
    );
};

export default FilterItem;