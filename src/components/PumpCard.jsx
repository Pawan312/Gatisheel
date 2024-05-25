import React from 'react'

const PumpCard = () => {
  return (
    <div className='rounded-xl border border-zinc-300 flex p-4 w-[35vw] gap-4'>
        <div><img className=' w-[12vw] h-[21vh] object-cover rounded-md' src="src\assets\pump.png" alt="" /></div>
        <div className='flex flex-col gap-6 p-1'>
            <div className='text-[#053B11] text-2xl font-semibold'><h1>PUMP 1</h1></div>
            <div className='flex font-semibold'>
                <div className='w-1/3 placeholder:'><h4 className='text-[#075418]'>Description</h4> <h4>Paddy, Banana, Coconuts</h4></div>
                <div className='w-1/3'><h4 className='text-[#075418]'>Pump type</h4><h4>Submersible pump</h4></div>
                <div className='w-1/3'><h4 className='text-[#075418]'>Motor capacity</h4> <h4>5 HP</h4></div>
            </div>
        </div>
    </div>
  )
}

export default PumpCard