import { useEffect, useState } from "react"
import RenderItem from "./RenderItem"
import AddToCartBtn from "./AddToCartBtn"

function Items() {
    const [items, setItems] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products?limit=6")
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                const resJSON = await res.json()
                setItems(resJSON)
                setError(null)
            } catch (err) {
                console.error("Failed to fetch items:", err)
                setError("Failed to load items. Please try again later.")
                setItems([])
            } finally {
                setLoading(false)
            }
        };
        getItems()
    }, [])

    if (loading) {
        return <div className="itemDisplay">Loading items...</div>
    }

    if (error) {
        return <div className="itemDisplay error-message">{error}</div>
    }

    let list;
    if (items.length > 0) {
        list = items.map((item) => (
            <div className="card" key={item.id}>
                <RenderItem
                    id={item.id} title={item.title}
                    image={item.image} price={item.price}
                />
                <AddToCartBtn />
            </div>
        ))
    } else {
        list = <div className="no-items-message">No items found.</div>;
    }


    return (
        <div className="itemDisplay">{list}</div>
    )
}

export default Items