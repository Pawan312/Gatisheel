import React from 'react'
import PumpCard from './PumpCard'
import SideBar from './SideBar'

const FarmerProfile = () => {
  return (
    <>
    <SideBar/>
    <div className=' px-14 py-10 flex flex-col gap-10 ml-[16vw]'>
      <div className='flex gap-10 '>
        <img className='w-44 h-44 rounded-full object-cover border-[#053B11] border-4' src="src\assets\farmer.jpeg" alt="" />
        <div className='flex flex-col'>
          <div className='flex items-center h-20 text-3xl font-semibold text-[#053B11]'><h1>Anand Basu</h1></div>
          
          <div className='w-[56vw] flex font-semibold text-lg'>
            <div className='w-1/3'><h4>+91 99999 99999</h4><h4>Mangalpur, Karnal</h4></div>
            <div className='w-1/3 '><h4 className='text-[#075418]'>Farm Area</h4><h4>3 acres</h4></div>
            <div><h4 className='text-[#075418]'>Location</h4><h4>51.5074°N, LON: 0.1278°W</h4></div>
            
          </div>
        </div>
      </div>
      <div className='flex gap-5 flex-wrap'>
        <PumpCard />
        <PumpCard />
        <PumpCard />
        <PumpCard />
        <PumpCard />
        <PumpCard />
        <PumpCard />
        <PumpCard />
        <PumpCard />
        <PumpCard />
      </div>
    </div>
    </>
  )
}

export default FarmerProfile