import { Generate, Star } from 'assets'
import Dropdown from 'components/Dropdown'
import React, { ChangeEvent, useState } from 'react'
import { FaHistory } from 'react-icons/fa'
import { GoChevronDown } from 'react-icons/go'
import { IoChevronDown } from 'react-icons/io5'
import { FiRefreshCcw } from 'react-icons/fi'
import { LuTrash } from 'react-icons/lu'
import InputHistory from './InputHistory'

const Activity = () => {
  const ActivityTypeList = ['Community Service', 'Teaching', 'Cleaning']

  const [inputValue, setInputValue] = useState<string>('')
  const maxCharacterCount = 50

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    // Check if the new value exceeds the character limit
    if (newValue.length <= maxCharacterCount) {
      setInputValue(newValue)
    }
  }

  const [showHistory, setShowHistory] = useState(false)

  return (
    <div className="flex flex-col rounded-[20px] border border-[#E1E4E7] px-5 py-6">
      <div className="font-semibold text-base">Activity</div>

      {/* activity prompt */}
      <div className="pt-6 flex flex-col gap-[10px]">
        <div className="text-sm text-neutral-400 font-medium">
          Activity prompt
        </div>
        <textarea className="min-h-[112px] p-4 rounded-xl bg-[#f7f7f7]" />
        <button className="px-[14px] py-2 w-full flex flex-row justify-center bg-gradient-to-b from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 focus:bg-blue-700 cursor-pointer rounded-xl shadow">
          <img src={Star} />
          <span className="text-white font-medium text-sm">
            Generate content
          </span>
        </button>
      </div>

      <div className="w-full h-[0px] border border-neutral-300 border-dashed my-8"></div>

      <div className="flex flex-col gap-12">
        {/* activity type */}
        <div>
          <div className="flex flex-row justify-between items-center pb-2">
            <div className="text-neutral-400 text-sm font-medium">
              Activity type
            </div>
            <img src={Generate} className="cursor-pointer" />
          </div>
          <Dropdown options={ActivityTypeList} />
        </div>

        <InputHistory
          label="Position/Leadership description"
          maxCharacterCount={50}
        />
        <InputHistory label="Organization name" maxCharacterCount={1000} />
        <InputHistory label="Describe activity" maxCharacterCount={150} />

        <div>
          <div className="text-neutral-400 text-sm font-medium">
            Participation grade levels
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
