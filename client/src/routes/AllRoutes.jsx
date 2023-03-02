import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Playzone from "../pages/Playzone";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/playzone"
        element={
          <PrivateRoute>
            <Playzone />
          </PrivateRoute>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

const PrivateRoute = ({ children }) => {
  const { currentUser } = useSelector((store) => store);
  const location = useLocation();
  if (!currentUser) {
    return <Navigate to={"/"} replace state={{ from: location }} />;
  }
  return children;
};

export default AllRoutes;
