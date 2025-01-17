import  { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router'
import useAuthStore from '@/store/authStore'

const StartCampaign = () => {
  const {getme, myData} = useAuthStore()

  useEffect(()=> {
    getme()
  },[])

  return (
    <section className="py-12 px-4 text-white">
      <div className=" bg-[#003A39] mx-auto flex justify-between items-start p-8 rounded-xl">
        <div>
          <h2 className="text-2xl font-bold mb-2">Start your own campaign</h2>
          <p>Have a health-related cause? Start your crowdfunding campaign today!</p>
        </div>
        {myData? 
        <Link to='/crowdfunding/create'>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
          Get Started
        </Button>
        </Link> 
        :
        <Link to="/login">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white ">
          Login to start Campaign
          </Button>
          </Link>
            }
        
      </div>
    </section>
  )
}

export default StartCampaign