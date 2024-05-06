import { useEffect, useState } from "react";
import './App.css'
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/UserStack/Home/Home";
import Sats from "./Pages/UserStack/Sats/Sats";
import Mars from "./Pages/UserStack/Mars/Mars";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Gallery from "./Pages/UserStack/Gallery/Gallery";
import NasaNews from "./Pages/UserStack/NasaNews/NasaNews";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UserStack from "./Pages/UserStack/UserStack";
import { ToastContainer } from "react-toastify";

function App() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/user",
  //     element: <UserStack />,
  //     children: [
  //       {
  //         path: "",
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: "home",
  //         element: <Home />,
  //       },
  //       {
  //         path: "mars",
  //         element: <Mars />,
  //       },
  //       {
  //         path: "sats",
  //         element: <Sats />,
  //       },
  //       {
  //         path: "gallery",
  //         element: <Gallery />,
  //       },
  //       {
  //         path: "news",
  //         element: <NasaNews />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/*",
  //     element: <NotFound />,
  //   },
  // ]);

  return (
    <>
      < div className="font-poppins">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<UserStack />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="mars" element={<Mars />} />
            <Route path="sats" element={<Sats />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="news" element={<NasaNews />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* <RouterProvider router={router} /> */}
      </div>
      <ToastContainer />
    </>

  )
}

export default App
