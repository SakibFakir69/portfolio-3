

import React from 'react'
import HeaderComponent from './ui/navbar'
import MenuBar from './ui/navbar'

function WraperComponent({children}) {

  // for easy controll 

  return (
    <div className='bg-[#021325]'>
        <nav>
          <MenuBar/>
        </nav>

        {children}

        <footer>
          footer
        </footer>
      
    </div>
  )
}

export default WraperComponent
