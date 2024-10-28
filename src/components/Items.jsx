import { useEffect, useState } from "react";
import RenderItem from "./RenderItem";
import AddToCartBtn from "./AddToCartBtn";

function Items() {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async () => {
            const res = await fetch("https://fakestoreapi.com/products?limit=6")
            const resJSON = await res.json()
            setItems(resJSON)
        }
        getItems()
    }, [])

    let list

    items ? (list = items.map((item) => (
        <div className="card" key={item.id}>
            <RenderItem
             id={item.id} title={item.title}
             image={item.image} price={item.price}
            />
            <AddToCartBtn />
        </div>
    ))) : null


    return (
        <div className="itemDisplay">{list}</div>
    )
}

export default Items