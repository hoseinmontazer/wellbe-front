import { NavLink } from "react-router-dom"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar"
import useLogout from "@/hooks/use-logout"
import useAuthStore from "@/store/use-Auth-store"

const Navbar = () => {
  const logout = useLogout();
  const id = useAuthStore((state) => state.id);

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
          
          {id ? (
            <>
              <MenubarItem>
                <NavLink to="/profile" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : ""}>
                  Profile
                </NavLink>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem onClick={() => logout.mutate()} className="cursor-pointer">
                Logout
              </MenubarItem>
            </>
          ) : (
            <MenubarItem>
              <NavLink to="/auth" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : ""}>
                Login
              </NavLink>
            </MenubarItem>
          )}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Navbar