import React from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useActionData, useLocation } from "react-router-dom";
import Footer from "./component/Footer";
import AllRoom from "./pages/AllRoom";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./component/HotelReg";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/Dashboard";
import AddRoom from "./pages/AddRoom";
import ListRoom from "./pages/ListRoom";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}

      <div className="mini-h-7[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRoom />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Layout />} />
          <Route index element={Dashboard} />
          <Route path="add-room" element={AddRoom} />
          <Route path="list-room" element={ListRoom} />
          <Route />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
