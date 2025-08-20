

import React from 'react'
import WraperComponent from '../components/WraperComponent'
import { Outlet } from 'react-router'

function MainLayouts() {
  return (
    <div>
        
        <WraperComponent>
            <Outlet/>
        </WraperComponent>
      
    </div>
  )
}

export default MainLayouts
