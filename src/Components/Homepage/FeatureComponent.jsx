import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router';

const FeatureSection = () => {
  const steps = [
    { number: '1', title: 'Informal Complaint (STEP 1)' },
    { number: '2', title: 'Formal Complaint' },
    { number: '3', title: 'Include your bio details' },
    { number: '4', title: 'Submit your Complaint' },
    { number: '5', title: 'Request Further Review' }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Image placeholder */}
          <div className="relative h-[600px] overflow-hidden rounded-3xl">
            {/* You can replace this with an actual image */}
            <img src='/hallway.jpg' alt='steps' className='object-cover w-full' />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium text-emerald-500">
              Advocacy
            </span>

            <h2 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl md:text-2xl">
            This is a detailed process flow for launching and promoting the Revamped and Upgraded
            Patient Campaigns feature on the Patient.ng website
            </h2>

            <div className="mt-8 space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm transition-colors hover:bg-gray-50"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-sm font-medium text-emerald-600">
                    {step.number}
                  </span>
                  <span className="text-lg font-medium">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>


            <Link to="/advocacy">
            <Button className="mt-8 w-fit bg-emerald-500 hover:bg-emerald-600">
              Submit your Complaint
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;