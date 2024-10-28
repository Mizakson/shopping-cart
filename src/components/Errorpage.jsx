import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div id="error-container">
            <h2>ERROR - page does not exist!</h2>
            <button>
                <Link to="/home">Go back Home...</Link>
            </button>
            
        </div>
    )
}

export default ErrorPage