import { NavLink } from "react-router-dom"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar"

const Navbar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Navigation</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : ""}>
              Home
            </NavLink>
          </MenubarItem>
          <MenubarItem>
            <NavLink to="/cycle" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : ""}>
              Cycle
            </NavLink>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <NavLink to="/auth" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : ""}>
              Login
            </NavLink>
          </MenubarItem>
          <MenubarItem>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : ""}>
              Profile
            </NavLink>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Navbar