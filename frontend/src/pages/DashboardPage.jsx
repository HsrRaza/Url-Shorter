import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import StatsCards from '../components/dashboard/StatsCards'
import CreateUrlCard from '../components/dashboard/CreateUrlCard'

const DashboardPage = () => {
  return (
    // <div className="min-h-screen bg-black  font-sans tracking-[-0.02em] overflow-hidden relative flex flex-col items-center justify-center p-4">

    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-8">





        {/* <div className='absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-900/20 blur-[120px]  rounded-full pointer-events-none'></div>
      <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[100px]  rounded-full pointer-events-none'></div> */}
        {/* <div className="bg-white/5  p-8 rounded-lg shadow-md w-full max-w-4xl "> */}
        <DashboardHeader />
        <StatsCards/>
        <CreateUrlCard/>
        {/* <UrlForm /> */}
        <UserUrl />
      </div>
    </div>
  )
}

export default DashboardPage