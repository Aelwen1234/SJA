import React from "react";
import Navbar from "./component/Navbar";
import Landing from "./component/Landing"
import ListCar from "./component/ListCar";
import CarDetail from "./component/CarDetail"
import InputCar from "./component/InputCar"
import EditCar from "./component/Editcar"
import EditData from "./component/Editdata"
import { createBrowserRouter, RouterProvider, Route, Link, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ListCar />} />
        <Route path='cardetail' element={<CarDetail />} />
        <Route path='carinput' element={<InputCar />} />
        <Route path='cardetail/caredit' element={<EditCar />} />
        <Route path='cardetail/dataedit' element={<EditData />} />
      </Routes>
    </div>
  )
}

export default App