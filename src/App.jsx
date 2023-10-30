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
        <Route path='SJA/' element={<ListCar />} />
        <Route path='SJA/cardetail' element={<CarDetail />} />
        <Route path='SJA/carinput' element={<InputCar />} />
        <Route path='SJA/cardetail/caredit' element={<EditCar />} />
        <Route path='SJA/cardetail/dataedit' element={<EditData />} />
      </Routes>
    </div>
  )
}

export default App