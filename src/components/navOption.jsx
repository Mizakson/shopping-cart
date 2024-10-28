import { Link } from "react-router-dom";

export default function Navoption(text, link, toggleOption) {
    return (
        <li id={text}>
            <Link to={link} onClick={toggleOption}>{text}</Link>
        </li>
    )
}