import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function AddToCartBtn() {

    // const { itemTotal, setItemTotal } = useOutletContext()

    const context = useOutletContext()

    var [quantity, setQuantity] = useState(1)

    const handleChange = (e) => {
        e.preventDefault()
        setQuantity(e.target.value)
        console.log(quantity)
        // useState(() => itemTotal + setQuantity(e.target.value))
    }

    const updateCounter = (e) => {
        e.preventDefault()
        context.setItemTotal(() => (
            Number(context.itemTotal) + Number(quantity)
        ))
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
            <button onClick={updateCounter}>Add to cart</button>
        </div>

    )
}

export default AddToCartBtn