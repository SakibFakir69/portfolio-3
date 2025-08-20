

import React from 'react'
import HeaderComponent from './ui/navbar'
import MenuBar from './ui/navbar'

function WraperComponent({children}) {

  // for easy controll 

  return (
    <div>
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
