import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to="/"> Page 1</Link>
        <Link to="/page2"> Page 2</Link>
        <Link to="/page3"> Page 3</Link>
    </nav>
  )
}

export default Navbar