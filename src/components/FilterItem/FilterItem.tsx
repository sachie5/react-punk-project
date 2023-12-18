type FiltersItemProps = {
    id: string;
    name: string;
    label: string;
};

const FilterItem = ({ id, name, label }: FiltersItemProps) => {
 return (
<><input type="checkbox" id={id} name={name} value={label} /><label htmlFor={name}>{label}</label><br /></>
    );
};

export default FilterItem;