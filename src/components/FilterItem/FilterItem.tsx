type FiltersItemProps = {
    id: string;
    name: string;
    label: string;
};

const FilterItem = ({ id, name, label }: FiltersItemProps) => {
 return (
<><label htmlFor={name} className="nav__label">{label} </label><input type="checkbox" id={id} name={name} value={label} /><br /></>
    );
};

export default FilterItem;