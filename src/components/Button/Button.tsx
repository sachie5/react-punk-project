import "./Button.scss";
import { MouseEventHandler } from "react";

type ButtonProps = {
    name: string;
    id: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    value: string;
};

const Button = ({name, id, value, onClick}: ButtonProps) => {
   return (
     <button className="main__button" id={id} value={value} onClick={onClick}>{name}</button>
   )
};

export default Button;