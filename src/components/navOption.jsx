import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Navoption({ text, link, toggleOption }) {
    return (
        <li id={text}>
            <Link to={link} onClick={toggleOption}>{text}</Link>
        </li>
    )
}

Navoption.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    toggleOption: PropTypes.func.isRequired,
}

export default Navoption