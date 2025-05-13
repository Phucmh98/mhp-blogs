import NavLink from "./navbar-link";

const Navbar = () => {
    return ( 
        <nav className="w-full h-full flex items-center justify-between" >
           <span>Logo</span>
           <NavLink/>
           <span>Time</span>
        </nav>
     );
}
 
export default Navbar;