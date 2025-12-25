"use client"
import React, { useContext, useState } from 'react'
import { Button } from '../../../components/ui/button'
import { PayPalButtons } from '@paypal/react-paypal-js'
import db from '../../../config/dbConfig'
import Users from '../../../config/schema'
import { UserDetailsContext } from '../../../app/_context/UserDetailsContext'
import { useRouter } from 'next/navigation'

const BuyCreditsCard = () => {
    const creditLists = [
        {
            price: 0.99,
            totalCredits: 5
        },
        {
            price: 1.99,
            totalCredits: 10
        },
        {
            price: 2.99,
            totalCredits: 25
        },
        {
            price: 4.99,
            totalCredits: 50
        },
        {
            price: 9.99,
            totalCredits: 100
        },
    ]

    const router = useRouter();

    const {userDetail, setUserDetail} = useContext(UserDetailsContext);

    const [selectedCredit, setSelectedCredit] = useState([]);

    const onPaymentSuccess = async ()=> {
        console.log("PAyment success")
        // update user credits in db
        const result = await db.update(Users).set({
            credits: userDetail?.credits + selectedCredit?.totalCredits
        }).returning()

        if(result) {
            setUserDetail(prev=>({...prev, credits: userDetail?.credits + selectedCredit?.totalCredits}))
            router.push('/dashboard')
        }
    }

  return (
    
      <div>
          <div className='flex gap-8 flex-wrap justify-center items-center'>
            {creditLists.map((credits, index)=> {
                return(
                   <div key={index} className='border-2 rounded-lg border-[#9D722F] w-55 h-50 flex flex-col items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all'> 
                        {selectedCredit?.totalCredits == credits?.totalCredits ? <p className='text-[#9D722F]'>Selected</p> : ''}
                        <h1 className='text-2xl font-semibold'>{credits?.totalCredits}</h1>
                        <h2 className='text-xl'>Credits</h2>
                        <Button onClick={()=>setSelectedCredit(credits)} className='bg-[#9D722F] cursor-pointer px-10'>Buy</Button>
                        <h2 className='text-xl'>$ {credits?.price}</h2>
                   </div>
                )
            })}

        </div>

        <div className='max-w-110 mx-auto mt-8'>
            {selectedCredit?.totalCredits && 
                <div>
                    <p className='text-center mb-1'>Please click below to process your payment</p>
                    <p className='text-xs text-center text-gray-400'>Note: You can choose either paypal or directly pay through debit or credit cards.</p>
                    <PayPalButtons onApprove={onPaymentSuccess} style={{ layout: "horizontal" }} createOrder={(data, actions)=>{
                    return actions?.order.create({
                        purchase_units : [
                           { amount : {
                                value : selectedCredit?.price?.toFixed(2),
                                currency_code : "USD"
                            }}
                        ]
                    })
                }} />
                </div>

                

}
            </div>
      </div>
  )
}

export default BuyCreditsCard