import React from 'react'

interface IColorProps {
  colors: Array<string>
  limit: number
}
const ColorPreview = ({ colors, limit }: IColorProps) => {
  const rederColor = colors.slice(0, limit)

  const rederLengthColor = colors.length - limit

  return (
    <span className="flex flex-row items-center">
      {rederColor.map((color, idx) => (
        <div
          key={color + idx}
          className={` w-4 h-4 -ml-2 rounded-full border-2 border-white shadow`}
          style={{ backgroundColor: `${color ?? 'none'}` }}
        ></div>
      ))}
      {rederLengthColor > 0 && <span>+{rederLengthColor}</span>}
    </span>
  )
}

export default ColorPreview
