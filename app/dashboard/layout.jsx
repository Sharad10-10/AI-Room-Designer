import React from 'react'
import Header from "../../components/custom/Header/Header"

const DashboardLayout = ({children}) => {
  return (
    <div>
        <Header />
        {children}    
    </div>
  )
}

export default DashboardLayout