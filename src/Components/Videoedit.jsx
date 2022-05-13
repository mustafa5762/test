import React from 'react'
import ResponsiveDrawer from './Sidebar'

function Videoedit() {
  return (
    <ResponsiveDrawer>
      <input onChange={(e) => console.log(e.target.value)} type="text" value="Hello yr"/>
    </ResponsiveDrawer>
  )
}

export default Videoedit