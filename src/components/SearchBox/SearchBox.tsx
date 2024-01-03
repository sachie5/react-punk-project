import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  id: string;
  name: string;
  placeholder: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  searchTerm: string;
};

const SearchBox = ({
  id,
  name,
  placeholder,
  handleInput,
  searchTerm,
}: SearchBoxProps) => {
  return (
    <div className="searchbox">
      <label className="searchbox__label" htmlFor={name}>
        Search:
      </label>
      <input
        className="searchbox__input"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        size={15}
        onInput={handleInput}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBox;
