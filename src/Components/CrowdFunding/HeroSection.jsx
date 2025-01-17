import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import useAuthStore from '@/store/authStore'

export const HeroSection = () => {
  const {getme, myData} = useAuthStore()

  useEffect(()=> {
    getme()
  },[])
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster='/hallway.jpg'
      >
        <source src="/placeholder-video.mp4" type="video/mp4"  />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Uniting Hearts, Saving Lives!
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
        You can start a Campaign or join a Green Heart Campaign to get the help you need, when you need it. Our platform is simple, trusted and free.
        </p>
        <div className="flex space-x-4">
          <Link to={'/crowdfunding/create'}>
          {myData? <Button className="bg-emerald-500 hover:bg-emerald-600 text-white ">
              Start a Campaign
            </Button> :
            <Link to="/login">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white ">
            Login to start Campaign
            </Button>
            </Link>
             }
                   
          </Link>
          <Link to={'/campaigns'}>
            <Button variant="outline" className="bg-white text-black hover:bg-gray/100 hover:text-emerald-500">
              See Campaigns
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection