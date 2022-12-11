import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/sign-in">Sign in</NavLink>
      </nav>
    );

    
}
