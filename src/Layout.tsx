import { Outlet } from "react-router"
import Navbar from "./components/Navbar"

const Layout = () => {
  return (
    <div className="w-full mx-auto">
    <Navbar />
    <div className="px-6 py-6 min-h-screen bg-[#EEEFF1] dark:bg-[#0F0F10]">
      <Outlet />
    </div>
    </div>
  )
}

export default Layout
