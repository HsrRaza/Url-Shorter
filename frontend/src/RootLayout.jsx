import { Outlet } from "@tanstack/react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import { useLocation } from "@tanstack/react-router"

const RootLayout = () => {

  const isLocation = useLocation()
  const isdashBoard = isLocation.pathname === "/dashboard"

  return (

    <>
    {
      !isdashBoard && <Navbar/>
    }
      <Outlet />
      {
        !isdashBoard && <Footer/>

      }
    </>
  )
}

export default RootLayout  