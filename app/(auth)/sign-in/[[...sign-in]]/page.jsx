import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <SignIn appearance={{elements : {footer : 'hidden', footerAction : "hidden"}}}/>
    </div>
  )
}