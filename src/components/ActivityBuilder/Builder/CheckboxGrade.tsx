import React, { useState } from 'react'

interface CheckboxGroupProps {
  selectedValues: string[]
  onCheckboxChange: (value: string) => void
}

const CheckboxGrade: React.FC<CheckboxGroupProps> = ({
  selectedValues,
  onCheckboxChange
}) => {
  const options = ['9', '10', '11', '12', 'Post-graduate']
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

export default CheckboxGrade
