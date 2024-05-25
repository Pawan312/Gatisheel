import React from 'react'
import SideBar from './components/SideBar'
import Routing from './utils/Routing'
import Signin from './components/Signin'

const App = () => {
  return (
    // <div className='flex'>
    //   <SideBar/>
    //   <Routing/>
    // </div>
    <div>
      <Routing/>
    </div>
  )
}

export default App