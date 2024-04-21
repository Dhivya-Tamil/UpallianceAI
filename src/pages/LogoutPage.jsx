import React from 'react'

const LogoutPage = () => {
    const logout = () =>{
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div style={{marginLeft:'600px',width:'15%',height:"12%",marginTop:"250px"}}>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default LogoutPage
