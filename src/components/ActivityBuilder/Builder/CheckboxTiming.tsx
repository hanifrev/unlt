import React, { useState } from 'react'

interface CheckboxGroupProps {
  selectedValues: string[]
  onCheckboxChange: (value: string) => void
}

const CheckboxTime: React.FC<CheckboxGroupProps> = ({
  selectedValues,
  onCheckboxChange
}) => {
  const options = ['During school year', 'During school break', 'All year']
  return (
    <div className="flex flex-col text-neutral-500 text-sm gap-3 pt-[14px] align-middle">
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedValues.includes(option)}
            onChange={() => onCheckboxChange(option)}
            className="mr-[6px]"
          />
          {option}
        </label>
      ))}
    </div>
  )
}

export default CheckboxTime
