
type SearchBoxProps = {
    id: string;
    name: string;
    placeholder: string;
};

const SearchBox = ({ id, name, placeholder }: SearchBoxProps) => {
   return (
    <div className="searchbox">
     <input type="text" id={id} name ={name} placeholder={placeholder}/>
     </div>
   )
};

export default SearchBox;