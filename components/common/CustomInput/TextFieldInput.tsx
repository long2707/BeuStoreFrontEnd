import { spawn } from 'child_process'
import React from 'react'
import { Controller } from 'react-hook-form'

interface ITextField {
  type: string
  name: string
  placeholder: string
  onClick?: () => void
  icon?: React.ReactNode
  control?: any
}
const TextFieldInput = (props: ITextField) => {
  const { type, name, placeholder, onClick, icon, control } = props
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <div>
            <div
              className={`box-border inline-flex border-solid border-[1px] border-[#919eab52]  hover:border-[#212b36]  focus:border-[#212b36] rounded-md w-full py-[10px] px-2 ${
                error && 'border-red-500'
              }`}
            >
              <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className="text-[18px] font-medium focus:border-none focus:outline-none min-w-0 w-full "
              />
              {icon && (
                <div className="flex items-center">
                  <button
                    className="p-[8px]  hover:rounded-full hover:bg-gray-200"
                    onClick={onClick}
                  >
                    {icon}
                  </button>
                </div>
              )}
            </div>
            {error && <span className="text-red-500">{error.message}</span>}
          </div>
        )
      }}
    />
  )
}

export default TextFieldInput
