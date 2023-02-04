import React from 'react'
import Menu from '../pages/menu/menu';


function Layout({children}) {
  return (
    <div className='container-fluid'>
        <div className='section p-2'><Menu/></div>
        <div className='section p-2'>{children}</div>
    </div>
  )
}

export default Layout