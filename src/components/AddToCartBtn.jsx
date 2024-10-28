import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function AddToCartBtn({ updateCounter }) {
    
    const { updateCounter } = useOutletContext()

    var [quantity, setQuantity] = useState(1)

    const handleChange = (e) => {
        setQuantity(e.target.value)
    }

    return (
        <div className="card-bottom">
            <div className="item-quantity">
                <input 
                type="number" min="1"
                max="100" value={quantity}
                onChange={handleChange} className="quantity-input"
                />
            </div>
            <button onClick={updateCounter}>Add to cart</button>
        </div>

    )
}