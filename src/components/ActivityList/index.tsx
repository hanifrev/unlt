import React, { useEffect, useState } from 'react'
import ListHeader from './Header'
import axios from 'axios'
import { FaChevronDown } from 'react-icons/fa6'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdDragIndicator } from 'react-icons/md'

interface ListProp {
  builderData?: any
  onDataPosted: any
}

const ActivityList: React.FC<ListProp> = ({ builderData, onDataPosted }) => {
  const [responseData, setResponseData] = useState([])
  const [dataUpdated, setDataUpdated] = useState(false)
  console.log(builderData)

  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpand = (itemId: number) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems.includes(itemId)) {
        return prevExpandedItems.filter((id) => id !== itemId)
      } else {
        return [...prevExpandedItems, itemId]
      }
    })
  }

  const fetchData = async () => {
    try {
      const getResponse = await axios.get(
        'https://658d0f157c48dce947386960.mockapi.io/unilite'
      )
      setResponseData(getResponse.data)
    } catch (error) {
      console.error('Error making GET request:', error)
    }
  }

  const deleteItem = async (itemId: number) => {
    try {
      const response = await axios.delete(
        `https://658d0f157c48dce947386960.mockapi.io/unilite/${itemId}`
      )
      console.log('DELETE request successful:', response.data)
      fetchData() // Refresh the data after deletion
    } catch (error) {
      console.error('Error making DELETE request:', error)
    }
  }

  useEffect(() => {
    fetchData()
    setDataUpdated(false)
  }, [dataUpdated])

  useEffect(() => {
    const fetchDataAsync = async () => {
      if (builderData) {
        setDataUpdated(true)
        console.log('=====')
        fetchData()
      }
    }

    fetchDataAsync()
  }, [builderData])

  return (
    <div className="px-8 pt-6 flex flex-col gap-[18px]">
      <ListHeader />
      {responseData?.length >= 0 ? (
        <div className="flex flex-col gap-3">
          {responseData.map((item: any) => {
            const isExpanded = expandedItems.includes(item.id)
            return (
              <div
                key={item.id}
                className="flex flex-col px-5 py-6 rounded-[20px] shadow border border-blue-600 w-full bg-white"
              >
                <div className="text-base flex flex-row items-center justify-between">
                  <div
                    className="text-base flex flex-row items-center gap-2 cursor-pointer"
                    onClick={() => toggleExpand(item.id)}
                  >
                    <span className={`${isExpanded && 'rotate-180'}`}>
                      <FaChevronDown />
                    </span>
                    <span>{item[0].type}</span>
                  </div>
                  <div className="text-base flex flex-row items-center gap-2 text-neutral-500 cursor-pointer">
                    <FaRegTrashAlt onClick={() => deleteItem(item.id)} />
                    <MdDragIndicator />
                  </div>
                </div>
                <div className="h-[0px] border border-zinc-200 my-6"></div>
                {!isExpanded && (
                  <div className="flex flex-col gap-7">
                    <div className="flex flex-col">
                      <span className="text-neutral-500 text-[13px] font-medium">
                        Position/Leadership description
                      </span>
                      <span className="text-sm font-medium">
                        {item[0].position.map((item: any, index: number) =>
                          index === 0 ? item : `, ${item}`
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-neutral-500 text-[13px] font-medium">
                        Organization name
                      </span>
                      <span className="text-sm font-medium">
                        {item[0].organizationName.map(
                          (item: any, index: number) =>
                            index === 0 ? item : `, ${item}`
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-neutral-500 text-[13px] font-medium">
                        Describe activity
                      </span>
                      <span className="text-sm font-medium">
                        {item[0].describe.map((item: any, index: number) =>
                          index === 0 ? item : `, ${item}`
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-neutral-500 text-[13px] font-medium">
                        Participation grade levels
                      </span>
                      <span className="text-sm font-medium">
                        {item[0].gradeLevel.map((item: any, index: number) =>
                          index === 0 ? item : `, ${item}`
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-neutral-500 text-[13px] font-medium">
                        Timing of participation
                      </span>
                      <span className="text-sm font-medium">
                        {item[0].timing.map((item: any, index: number) =>
                          index === 0 ? item : `, ${item}`
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-neutral-500 text-[13px] font-medium">
                        Hours spent per week
                      </span>
                      <span className="text-sm font-medium">
                        {item[0].hours} hours
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-neutral-500 text-[13px] font-medium">
                        Weeks spent per year
                      </span>
                      <span className="text-sm font-medium">
                        {item[0].weeks} weeks
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-[#1A5BC5] text-xl font-semibold flex flex-row justify-center items-center gap-2 px-[18px] py-[10px]  rounded-xl">
          {/* <FaPlus />
          Add more activity */}
          Empty
        </div>
      )}
    </div>
  )
}

export default ActivityList
