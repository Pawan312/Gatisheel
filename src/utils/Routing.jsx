import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import DeviceDetails from '../components/DeviceDetails'
import FarmerProfile from '../components/FarmerProfile'
import Statistics from '../components/Statistics'
import SideBar from '../components/SideBar'
import Signin from '../components/Signin'

const Routing = () => {
  return (
    <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/device-details" element={<DeviceDetails />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/farmer-profile" element={<FarmerProfile />} />
    </Routes>
  )
}

export default Routing