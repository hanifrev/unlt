import React from 'react'
import Navigation from './Navigation/Navigation'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <Navigation />
      <main className="w-full">{children}</main>
    </div>
  )
}

export default Layout
