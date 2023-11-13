import React from 'react'

type TBackDrop = {
  openBackDrop: boolean
  onCloseSidebar: () => void
}

const BackDrop = ({ openBackDrop, onCloseSidebar }: TBackDrop) => {
  return (
    <div
      className={`fixed bg-black bg-opacity-40 inset-0 w-full h-full z-20 hidden ${
        openBackDrop && '!block '
      }`}
      onClick={onCloseSidebar}
    ></div>
  )
}

export default BackDrop
