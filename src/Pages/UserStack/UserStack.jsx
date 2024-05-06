import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
import Home from './Home/Home'
import Footer from '../../Components/Footer/Footer'
import LocalStore from '../../Utils/LocalStore/LocalStore'

export default function UserStack() {
  const isAuthenticated = () => {
    const tokenData = LocalStore.getToken()
    return tokenData && tokenData.email
  }
  if (!isAuthenticated()) return <Navigate to={'/login'} />
  return (
    <>
      < div className="font-poppins">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
