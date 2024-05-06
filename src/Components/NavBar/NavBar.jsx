import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Switch, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import { useTheme } from 'next-themes';
import logo from '../../assets/nasa.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LocalStore from '../../Utils/LocalStore/LocalStore';

export default function NavBar() {
    const { theme, setTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        { name: "Home", route: "/user/home" },
        { name: "Satellites", route: "/user/sats" },
        { name: "Mars Rover", route: "/user/mars" },
        { name: "Images", route: "/user/gallery" },
        { name: "News", route: "/user/news" },
    ];
    const navigate = useNavigate()
    const handleExploreMore = () => {
        navigate('/home')
    }
    const handleLogout = () => {
        LocalStore.removeToken()
        navigate('/login')
    }
    return (
        <Navbar isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen} isBordered isBlurred={true} maxWidth={'2xl'}>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarBrand>
                <img onClick={handleExploreMore} src={logo} className='w-[50px]' alt="" />
                {/* <p className="font-bold text-inherit">astrolk</p> */}
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                <NavbarItem>
                    <NavLink color="foreground" to="/user/home">
                        Home
                    </NavLink>
                </NavbarItem>
                <NavbarItem >
                    <NavLink to="/user/sats">
                        Satellites
                    </NavLink>
                </NavbarItem>
                {/* <NavbarItem>
                    <Link color="foreground" to="/earth">
                        Earth
                    </Link>
                </NavbarItem> */}
                <NavbarItem>
                    <NavLink color="foreground" to="/user/mars">
                        Mars Rover
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink color="foreground" to="/user/gallery">
                        Images
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink color="foreground" to="/user/news">
                        News
                    </NavLink>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Switch
                    isSelected={theme === 'dark'} // Check if the current theme is 'dark'
                    onValueChange={() => {
                        setTheme(theme === 'dark' ? 'light' : 'dark'); // Toggle between 'dark' and 'light' themes
                    }}
                    defaultSelected={theme === 'light'} // Set the default selected state based on the current theme
                    size="lg"
                    color="default"
                    startContent={<p>🌑</p>}
                    endContent={<p>☀</p>}
                >
                </Switch>
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="danger"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2 bg-primary-50">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">{ LocalStore.getToken().email}</p>
                        </DropdownItem>

                        <DropdownItem key="profile">
                            <p className='font-poppins'>My Profile</p>
                        </DropdownItem>
                        <DropdownItem key="help_and_feedback">
                            <p className='font-poppins'>Help & Feedback</p>
                        </DropdownItem>
                        <DropdownItem onClick={handleLogout} key="logout" color="danger">
                            <p className='font-poppins'>Log Out</p>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <NavLink
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            to={item.route}
                            size="lg"
                        >
                            {item.name}
                        </NavLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
