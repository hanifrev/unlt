import Header from 'components/ActivityBuilder/Header'
import React, { useState } from 'react'
import Builder from './Builder'
import ActivityList from 'components/ActivityList'

const ActivityBuilder = () => {
  const [builderValues, setBuilderValues] = useState()
  const [dataPosted, setDataPosted] = useState<any>()

  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <div className="max-w-[368px] w-full">
          <Builder
            onDataPosted={setDataPosted}
            builderActivity={setBuilderValues}
          />
        </div>
        <div className="bg-[#F8F9FC] w-full h-auto">
          <ActivityList onDataPosted={dataPosted} builderData={builderValues} />
        </div>
      </div>
    </div>
  )
}

export default ActivityBuilder
