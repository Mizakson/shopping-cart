function RenderItem({ id, title, image, price, key }) {
    return (
        <div className="top">
            <p>{title}</p>
            <img src={image} alt={title} />
            <p>${price}</p>
        </div>
    )
}

export default RenderItem