import { Generate, Star } from 'assets'
import Dropdown from 'components/Dropdown'
import React, { useState } from 'react'
import InputHistory from './InputHistory'
import CheckboxGrade from './CheckboxGrade'
import CheckboxTime from './CheckboxTiming'
import axios from 'axios'

interface BuilderProp {
  builderActivity?: any
  onDataPosted: () => void
}

const Activity: React.FC<BuilderProp> = ({ builderActivity, onDataPosted }) => {
  const [stateActivity, setStateActivity] = useState([
    {
      activity: '',
      type: '',
      position: [],
      organizationName: [],
      describe: [],
      gradeLevel: [],
      timing: [],
      hours: '',
      weeks: ''
    }
  ])

  console.log(stateActivity)

  const ActivityTypeList = ['Community Service', 'Teaching', 'Cleaning']

  // Participation grade levels function
  const [selectedValuesGrade, setSelectedValuesGrade] = useState<string[]>([])

  const handleCheckboxChange = (value: string) => {
    if (selectedValuesGrade.includes(value)) {
      setSelectedValuesGrade((prevValues) =>
        prevValues.filter((v) => v !== value)
      )
    } else {
      setSelectedValuesGrade((prevValues) => [...prevValues, value])
      setStateActivity((prevValues: any) => [
        {
          ...prevValues[0],
          gradeLevel: [value, ...prevValues[0].timing]
        },
        ...prevValues.slice(1)
      ])
    }
  }

  // Timing of participation function
  const [selectedValuesTiming, setSelectedValuesTiming] = useState<string[]>([])

  const handleCheckboxTimingChange = (value: string) => {
    if (selectedValuesTiming.includes(value)) {
      setSelectedValuesTiming((prevValues) =>
        prevValues.filter((v) => v !== value)
      )
    } else {
      setSelectedValuesTiming((prevValues) => [...prevValues, value])
      setStateActivity((prevValues: any) => [
        {
          ...prevValues[0],
          timing: [value, ...prevValues[0].gradeLevel]
        },
        ...prevValues.slice(1)
      ])
    }
  }

  // state and function to store data from builder to the state

  // activity
  const handleActivityChange = (value: string) => {
    setStateActivity((prevState) => [
      {
        ...prevState[0],
        activity: value
      },
      ...prevState.slice(1)
    ])
  }

  // type
  const handleTypeAct = (value: string) => {
    setStateActivity((prevState) => [
      {
        ...prevState[0],
        type: value
      },
      ...prevState.slice(1)
    ])
  }

  // position leadership
  const handlePosition = (value: string) => {
    setStateActivity((prevState: any) => [
      // Update the first object in the array
      {
        ...prevState[0],
        position: [value, ...prevState[0].position]
      },
      // Keep the rest of the objects unchanged
      ...prevState.slice(1)
    ])
  }

  // organization name
  const handleOrgName = (value: string) => {
    setStateActivity((prevState: any) => [
      {
        ...prevState[0],
        organizationName: [value, ...prevState[0].organizationName]
      },
      ...prevState.slice(1)
    ])
  }

  //   describe activity
  const handleDescAct = (value: string) => {
    setStateActivity((prevState: any) => [
      {
        ...prevState[0],
        describe: [value, ...prevState[0].describe]
      },
      ...prevState.slice(1)
    ])
  }

  // hours spent
  const handleHours = (value: string) => {
    setStateActivity((prevState) => [
      {
        ...prevState[0],
        hours: value
      },
      ...prevState.slice(1)
    ])
  }

  // weeks spent
  const hanldeWeeks = (value: string) => {
    setStateActivity((prevState) => [
      {
        ...prevState[0],
        weeks: value
      },
      ...prevState.slice(1)
    ])
  }

  const generate = async () => {
    try {
      const activityValue = stateActivity || ''
      builderActivity(activityValue && activityValue)

      const postData = stateActivity.map((item) => ({
        activity: item.activity || '',
        type: item.type || '',
        position: item.position || [],
        organizationName: item.organizationName || [],
        describe: item.describe || [],
        gradeLevel: item.gradeLevel || [],
        timing: item.timing || [],
        hours: item.hours || '',
        weeks: item.weeks || ''
      }))

      const response = await axios.post(
        'https://658d0f157c48dce947386960.mockapi.io/unilite',
        postData
      )

      console.log('POST request successful:', response.data)

      setStateActivity([
        {
          activity: '',
          type: '',
          position: [],
          organizationName: [],
          describe: [],
          gradeLevel: [],
          timing: [],
          hours: '',
          weeks: ''
        }
      ])
    } catch (error) {
      console.error('Error making POST request:', error)
    }
  }

  return (
    <div className="flex flex-col rounded-[20px] border border-[#E1E4E7] px-5 py-6">
      <div className="font-semibold text-base">Activity</div>

      {/* activity prompt */}
      <div className="pt-6 flex flex-col gap-[10px]">
        <div className="text-sm text-neutral-400 font-medium">
          Activity prompt
        </div>
        <textarea
          className="min-h-[112px] p-4 rounded-xl bg-[#f7f7f7] text-sm"
          onChange={(e) => handleActivityChange(e.target.value)}
        />
        <button
          onClick={generate}
          className="px-[14px] py-2 w-full flex flex-row justify-center bg-gradient-to-b from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 focus:bg-blue-700 cursor-pointer rounded-xl shadow"
        >
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
          <Dropdown options={ActivityTypeList} selectedValue={handleTypeAct} />
        </div>

        <InputHistory
          label="Position/Leadership description"
          maxCharacterCount={50}
          selectedValue={handlePosition}
        />
        <InputHistory
          label="Organization name"
          maxCharacterCount={1000}
          selectedValue={handleOrgName}
        />
        <InputHistory
          label="Describe activity"
          maxCharacterCount={150}
          selectedValue={handleDescAct}
        />

        <div>
          <div className="text-neutral-400 text-sm font-medium">
            Participation grade levels
          </div>
          <CheckboxGrade
            selectedValues={selectedValuesGrade}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>

        <div>
          <div className="text-neutral-400 text-sm font-medium">
            Timing of participation
          </div>
          <CheckboxTime
            selectedValues={selectedValuesTiming}
            onCheckboxChange={handleCheckboxTimingChange}
          />
        </div>

        <div>
          <div className="text-neutral-400 text-sm font-medium pb-[10px]">
            Hours spent per week
          </div>
          <input
            className="w-full  px-4 py-3 rounded-xl bg-[#f7f7f7] font-medium text-sm break-all"
            onChange={(e) => handleHours(e.target.value)}
          />
        </div>

        <div>
          <div className="text-neutral-400 text-sm font-medium pb-[10px]">
            Weeks spent per year
          </div>
          <input
            className="w-full  px-4 py-3 rounded-xl bg-[#f7f7f7] font-medium text-sm break-all"
            onChange={(e) => hanldeWeeks(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Activity
