import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
         <h1>Cars</h1>
         <div className="links">
            <div>
            <Link to="/">Car</Link>
            </div>
            <Link to="/Add">Add New Car</Link>
         </div>
        </nav>
    );
}
 
export default Navbar;