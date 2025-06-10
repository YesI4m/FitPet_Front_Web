import Footer from "layouts/Footer"
import Header from "layouts/Header"
import { Outlet } from "react-router-dom"

// component : Layout //
export default function Container() {

  // render : Layout Rendering //
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
