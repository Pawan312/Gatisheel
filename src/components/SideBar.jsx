import React from 'react'
import { Link } from 'react-router-dom'
import SideBarCard from './SideBarCard'
import img1 from '../assets/Collage.svg'
import img2 from '../assets/View Details.svg'
import img3 from '../assets/Circle Chart.svg'
import img4 from '../assets/Customer.svg'


const SideBar = () => {
  return (
    <div className='min-h-[100vh] pt-4 fixed w-[16vw] flex flex-col items-center gap-[14.5vh] bg-gradient-to-r from-[#075418] to-[#479532f5] ... '>
        <div className='flex gap-2'>
            <img src="src\assets\Gatisheel Logo.svg" alt="" />
            <div >
                <h1 className='font-semibold text-2xl'>GATISHEEL</h1>
                <h6 className='text-xs font-semibold '>Manage Remotely</h6>
            </div>
        </div>

        {/* background: linear-gradient(90deg, #075418 0%, #70BC2D 176.4%); */}


        <div className='flex flex-col items-end gap-12 w-full text-zinc-200 text-lg font-semibold'>
            <Link to="/dashboard"><SideBarCard url={img1}  data={"Dashboard"} ></SideBarCard></Link>
            <Link to="/device-details"><SideBarCard url={img2} data={"Device Details"} ></SideBarCard></Link>
            <Link to="/statistics"><SideBarCard url={img3}  data={"Statistics"} ></SideBarCard></Link>
            <Link to="/farmer-profile"><SideBarCard url={img4} data={"Farmer Profile"} ></SideBarCard></Link>
        </div>
    </div>
  )
}

export default SideBar