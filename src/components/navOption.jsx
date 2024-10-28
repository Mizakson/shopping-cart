import { Link } from "react-router-dom";

function Navoption({text, link, toggleOption}) {
    return (
        <li id={text}>
            <Link to={link} onClick={toggleOption}>{text}</Link>
        </li>
    )
}

export default Navoption