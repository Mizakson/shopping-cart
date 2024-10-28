function RenderItem({ id, title, image, price }) {
    return (
        <div className="card">
            <p>{title}</p>
            <img src={image} alt={title} />
            <p>${price}</p>
        </div>
    )
}

export default RenderItem