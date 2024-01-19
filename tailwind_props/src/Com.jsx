import React from 'react'

const Com = ({card_name, button}) => {
  return (
    <>
        <div className="shadow-lg shadow-black px-5 py-2 w-56 h-96">
            <p className="text-xl font-bold">{card_name }</p>
            <div className="w-40 h-60 m-5 bg-gray-300"></div>
            <button className="my-2 px-5 py-2 border-[1px] border-gray-300 font-bold"> {button}</button>
        </div>
    </>
  )
}

export default Com