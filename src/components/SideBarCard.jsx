import React from 'react'

const SideBarCard = ({url, data}) => {
  return (
    <div className='w-[14.6vw] h-[7vh] flex items-center rounded-l-full bg-zinc-400 pl-6'>
        <img src={url} alt="" />
        <h1>{data}</h1>
    </div>
  )
}

export default SideBarCard