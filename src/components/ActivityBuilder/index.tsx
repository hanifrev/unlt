import Header from 'components/ActivityBuilder/Header'
import React, { useState } from 'react'
import Builder from './Builder'
import ActivityList from 'components/ActivityList'

const ActivityBuilder = () => {
  const [builderValues, setBuilderValues] = useState()

  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <div className="max-w-[368px] w-full">
          <Builder builderActivity={setBuilderValues} />
        </div>
        <div className="bg-[#F8F9FC] w-full h-screen">
          <ActivityList builderData={builderValues} />
        </div>
      </div>
    </div>
  )
}

export default ActivityBuilder
