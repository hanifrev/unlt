import React, { useState } from 'react'
import Tabs from './Tabs'
import Activity from './Activity'
import Empty from './Empty'

const Builder = () => {
  const [tabs, setTabs] = useState()
  const handleTabsSelect = (value: any) => {
    console.log(value)
    setTabs(value)
  }

  return (
    <div className="p-6">
      <Tabs tabsSelect={handleTabsSelect} />
      <div className="pt-5">{tabs == 0 ? <Activity /> : <Empty />}</div>
    </div>
  )
}

export default Builder
