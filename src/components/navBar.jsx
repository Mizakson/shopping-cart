import { useState } from "react";
import Navoption from "./navOption";

function Navbar({ itemTotal }) {


    const [active, setIsActive] = useState(false)

    const toggleOption = () => {
        setIsActive(!active)
    }

    return (
        <nav>
            <div className="main-title">
                <h1>Main St. Shop</h1>
            </div>
            <div id="nav-container">
                <Navoption text="Home" link="/home" toggleOption={toggleOption}/>
                <Navoption text="Shop" link="/shop" toggleOption={toggleOption}/>
                <li style={{cursor: 'pointer'}}>Cart({itemTotal})</li>
            </div>
        </nav>
    )
}

export default Navbar