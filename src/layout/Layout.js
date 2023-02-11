import React from 'react'
import Menu from '../pages/menu/menu';
import Footer from '../pages/Footer/Footer';

function Layout({children}) {
  return (
    <div className='container-fluid'>
        <div className='section p-2'><Menu/></div>
        <div className='section p-2'>{children}</div>
        <div className='section p-2'><Footer/></div>
    </div>
  )
}

export default Layout