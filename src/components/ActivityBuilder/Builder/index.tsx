import React, { useState } from 'react'
import Tabs from './Tabs'
import Activity from './Activity'
import Empty from './Empty'

interface BuilderProp {
  builderActivity: any
}

const Builder: React.FC<BuilderProp> = ({ builderActivity }) => {
  const [tabs, setTabs] = useState()
  const handleTabsSelect = (value: any) => {
    setTabs(value)
  }

  return (
    <div className="p-6">
      <Tabs tabsSelect={handleTabsSelect} />
      <div className="pt-5">
        {tabs == 0 ? <Activity builderActivity={builderActivity} /> : <Empty />}
      </div>
    </div>
  )
}

export default Builder
