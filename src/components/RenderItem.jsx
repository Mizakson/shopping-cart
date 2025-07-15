import PropTypes from 'prop-types';

function RenderItem({ id, title, image, price }) {
    return (
        <div className="top">
            <p>{title}</p>
            <img src={image} alt={title} />
            <p>${price}</p>
        </div>
    )
}

RenderItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default RenderItem