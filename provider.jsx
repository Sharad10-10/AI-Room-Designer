"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { UserDetailsContext } from './app/_context/UserDetailsContext';

const Provider = ({children}) => {

  const {user} = useUser();

  const [userDetail, setUserDetail] = useState(null);
  

  useEffect(()=> {
    if(!user){
      return
    }

    const verifyUser = async()=> {

      const data = await fetch('/api/verify-user', {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
      })
  
      const result = await data.json()
  
      console.log(result)
  
      const userInfo = result?.user
  
      setUserDetail(userInfo)
      console.log(userDetail)
    }

    verifyUser()


  }, [user])


 
  


  return (
    <UserDetailsContext.Provider value={{userDetail, setUserDetail}}>
      <div>
      { children}
      </div>
    </UserDetailsContext.Provider>
  )
}

export default Provider