import Header from 'components/ActivityBuilder/Header'
import React from 'react'
import Builder from './Builder'

const ActivityBuilder = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <div className="max-w-[368px] w-full">
          <Builder />
        </div>
        <div className="bg-[#F8F9FC] w-full h-screen">zccxz</div>
      </div>
    </div>
  )
}

export default ActivityBuilder
