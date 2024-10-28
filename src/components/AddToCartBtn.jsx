// import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function AddToCartBtn() {

    // const { itemTotal } = useOutletContext()

    var [quantity, setQuantity] = useState(1)

    const handleChange = (e) => {
        setQuantity(e.target.value)
        // useState(() => itemTotal + setQuantity(e.target.value))
    }

    return (
        <div className="bottom">
            <div className="item-quantity">
                <input 
                type="number" min="1"
                max="100" value={quantity}
                onChange={handleChange} className="quantity-input"
                />
            </div>
            <button>Add to cart</button>
        </div>

    )
}

export default AddToCartBtn