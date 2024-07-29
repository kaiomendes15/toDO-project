
import { Link } from "react-router-dom";



const Navb = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={"feito"}>Activity History</Link>
                </li>
                <li>
                    modal
                </li>
            </ul>
        </nav>
    )

};

export default Navb