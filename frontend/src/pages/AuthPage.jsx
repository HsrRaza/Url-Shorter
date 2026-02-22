import { useState } from "react"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"


const AuthPage = () => {

     const [login , setLogin] = useState(true)

  return (
    <div className="min-h-screen relative bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className='absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-900/20 blur-[120px]  rounded-full pointer-events-none'></div>
      <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[100px]  rounded-full pointer-events-none'></div>
      {login ? <LoginForm state={setLogin}/> : <RegisterForm state={setLogin}/>}
   
  </div>
  )
}

export default AuthPage