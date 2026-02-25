
import { Blinker } from '../components/heroSection/Blinker'
import FeatureStats from '../components/heroSection/FeaturesStats'
import Text from '../components/heroSection/Text'
import UrlForm from '../components/UrlForm'
import Features from '../components/heroSection/Features'
const HomePage = () => {
  return (
    <div className="min-h-screen bg-black  font-sans tracking-[-0.02em] overflow-hidden relative ">
      <div className='absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-900/20 blur-[120px]  rounded-full pointer-events-none'></div>
      <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[10px]  rounded-full pointer-events-none'></div>

      {/* hero section */}

      <div className='min-h-screen flex flex-col items-center pt-40 text-center relative'>

        <Blinker />
        <Text/>
        <UrlForm/>
        <FeatureStats/>
        <Features/>
        
      </div>

    </div>







  )
}

export default HomePage


