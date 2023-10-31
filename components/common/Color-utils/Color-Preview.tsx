import React from 'react'

interface IColorProps {
  colors: Array<string>
  limit: number
}
const ColorPreview = ({ colors, limit }: IColorProps) => {
  const rederColor = colors.slice(0, limit)

  const rederLengthColor = colors.length - 1

  return (
    <span className="flex flex-row items-center">
      {rederColor.map((color, idx) => (
        <div
          key={color + idx}
          className={`${color} w-4 h-4 -ml-2 rounded-full border-2 border-white shadow`}
        ></div>
      ))}
      <span>+{rederLengthColor}</span>
    </span>
  )
}

export default ColorPreview
