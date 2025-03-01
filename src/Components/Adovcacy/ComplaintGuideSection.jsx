import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { CustomButton } from '../CustomButton'

/* const steps = [
  {
    number: 1,
    title: 'Informal Complaint (Stage 1)',
    content: 'If you are unhappy with the response you receive after raising the issue, you can make a written complaint. You can do this by filling out the online complaints form on the website here.'
  },
  {
    number: 2,
    title: 'Formal Complaint (Stage 2)',
    content: 'If your informal complaint does not resolve the issue, you can proceed with a formal complaint. This involves a more detailed investigation of your concerns.'
  },
  {
    number: 3,
    title: 'What to Include in your Complaint',
    content: 'Be sure to include all relevant details about your experience, including dates, times, locations, and names of staff members involved. The more specific information you provide, the better we can address your concerns.'
  },
  {
    number: 4,
    title: 'Submit your complaint online',
    content: 'Use our secure online form to submit your complaint. You will receive a confirmation email with a reference number for tracking your complaint.'
  },
  {
    number: 5,
    title: 'Request the HSE to review the compl...',
    content: 'If you are not satisfied with the response to your complaint, you can request the HSE to review your case. This is an independent review process.'
  }
] */

  const steps = [
  {
    number: 1,
    title: 'Informal Complaint',
    content: 'If you are unhappy with the care you received in a hospital, you can raise your issue by making a verbal complaint with any hospital staff you find. This issue might be resolved without needing to make a formal, written complaint to us at patient.ng.'
  },
  {
    number: 2,
    title: 'Formal Complaint',
    content: 'Your name, Phone number and Email address.  <br /> Name, Address and Department of the hospital.\n\n\n Who was involved, dates and times of the experience. \nAn accurate description of what happened. \n Your complaint should also outline what you have done to resolve the issue to date and what you want to happen now to resolve your issue. /n You can also attach any documentation to your complaint that you feel is relevant, through the online form or via email. \nIn your written complaint, you should grant permission to patient.ng to access your personal confidential information. If you don’t grant us permission to access your personal confidential information, we may not be able to effectively process or resolve your complaint..'
  },
  {
    number: 3,
    title: 'What to Include in your Complaint',
    content: 'Your name, Phone number and Email address. Name, Address and Department of the hospital. Who was involved, dates and times of the experience. An accurate description of what happened. Your complaint should also outline what you have done to resolve the issue to date and what you want to happen now to resolve your issue. You can also attach any documentation to your complaint that you feel is relevant, through the online form or via email. In your written complaint, you should grant permission to patient.ng to access your personal confidential information. If you don’t grant us permission to access your personal confidential information, we may not be able to effectively process or resolve your complaint.'
  },
  {
    number: 4,
    title: 'Submit your complaint',
    content: 'You may now proceed to submit your complaint online through the web form or via email complaints@patient.ng'
  },
  {
    number: 5,
    title: 'Request Further Review',
    content: 'If you are still unsatisfied with the response you received from the hospital through our service, you may consider requesting a further review by our professional patient advocates.'
  }
]

export function ComplaintGuideSection() {
  const [selectedStep, setSelectedStep] = useState(1)

  return (
    <section id='complaintGuide' className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Step-by-Step Guide to Making a Complaint</h2>
      <p className="text-gray-600 mb-8">
        This guide explains the different stages of the HSE Your Service, Your Say complaints policy.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {steps.map((step) => (
            <button
              key={step.number}
              onClick={() => setSelectedStep(step.number)}
              className="w-full text-left flex items-center space-x-4 p-2 rounded-lg transition-colors hover:bg-emerald-50"
            >
              <div 
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white
                  ${selectedStep === step.number ? 'bg-emerald-700' : 'bg-emerald-500'}`}
              >
                {step.number}
              </div>
              <span className={`text-lg ${selectedStep === step.number ? 'font-semibold' : ''}`}>
                {step.title}
              </span>
            </button>
          ))}
        </div>
        <div className="bg-emerald-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            {steps.find(step => step.number === selectedStep)?.title}
          </h3>
          <p className="text-gray-600">
            {steps.find(step => step.number === selectedStep)?.content}
          </p>
        </div>
      </div>
    </section>
  )
}