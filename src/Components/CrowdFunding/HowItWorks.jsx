import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router'

const Step = ({ number, title, description }) => (
  <div className="flex items-start mb-8">
    <div className="flex-shrink-0 w-10 h-10 bg-gray-200 text-black rounded-full flex items-center justify-center mr-4">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </div>
)

const HowItWorks = () => {
  const steps = [
    {
      title: "Start your fundraising",
      description: "Explore health initiatives and select the campaign you're passionate about supporting."
    },
    {
      title: "Share with your friends",
      description: "Send emails, Send text messages, Send on social media."
    },
    {
      title: "Manage donations",
      description: "Accept donations, Thank donors, Withdraw funds"
    },
    /* {
      title: "See Impact",
      description: "Discover the tangible results of your support and the transformative changes it's brought about."
    } */
  ]

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Let's see how it works</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-8">
              Learn how crowdfunding helps fund critical health initiatives
            </p>
            {steps.map((step, index) => (
              <Step key={index} number={index + 1} {...step} />
            ))}
            <Link to="/campaigns">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Support a Campaign
            </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/howitworks.png" 
              alt="How it works illustration" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks