import React from 'react'
import Header from './Header/Header'

type LayoutProps = {
  names: string[],
}

const Layout = ({names}: LayoutProps) => {
  return (
    <Header names={names}/>
  )
}

export default Layout