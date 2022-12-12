import React from 'react'

function Header() {
    const headerStyle = {
        backgroundColor: "#0055ff",
        color: "#fff",
        padding: "10px 15px"
       };
       
  return (
    <header>
<h1 style={headerStyle}>
 Guitar Practice Todo App
 </h1>
    </header>
  )
}

export default Header