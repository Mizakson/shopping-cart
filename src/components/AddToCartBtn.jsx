import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function AddToCartBtn() {

    // const { itemTotal, setItemTotal } = useOutletContext()

    const context = useOutletContext()

    var [quantity, setQuantity] = useState(1)

    const handleChange = (e) => {
        e.preventDefault()
        setQuantity(e.target.value)
        // useState(() => itemTotal + setQuantity(e.target.value))
    }

    const updateCounter = (e) => {
        e.preventDefault()
        context.setItemTotal(() => (
            Number(context.itemTotal) + Number(quantity)
        ))
    }

    const removeFromCart = (e) => {
        e.preventDefault()
        context.setItemTotal(() => (
            Number(context.itemTotal) - Number(quantity) > 0 ? Number(context.itemTotal) - Number(quantity) : Number(context.setItemTotal(0))
        ))
    }

    const clearCart = (e) => {
        e.preventDefault()
        Number(context.setItemTotal(0))
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
            <button onClick={removeFromCart}>Remove Item(s)</button>
            <button onClick={clearCart}>X</button>
        </div>

    )
}

export default AddToCartBtn