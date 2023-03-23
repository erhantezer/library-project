import { useState } from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const currentUser = true;

    return (
        <Nav justify="space-beetwen" wrap="wrap">
            <Logo to="/">Erhan Library</Logo>
            <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
                {menuIcon}
            </HamburgerIcon>
            <Menu showMenu={showMenu}>
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/about">About</MenuLink>
                {currentUser ? (
                    <MenuLink to="/login">
                        Logout
                    </MenuLink>
                ) : (
                    <>
                        <MenuLink to="/register">Register</MenuLink>
                        <MenuLink to="login">Login</MenuLink>
                    </>
                )}
            </Menu>
        </Nav>
    )
}

export default Navbar