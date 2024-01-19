import React from 'react'
import Com from './Com'

const App = () => {
  return (
    <>
      <div className="bg-green-400 text-4xl">tailwind test</div>
      <div className="m-20 flex">
        <Com card_name="Rakesh" button="Show details" />
        <Com card_name="Paneer Masala" button="Favourite" />
        <Com card_name="Evening" button="With girlfriend" />
      </div>
    </>
  )
}

export default App