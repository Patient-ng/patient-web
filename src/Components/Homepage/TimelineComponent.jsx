import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TimelineSection = () => {
  const timelineData = [
    {
      year: '2023',
      achievements: [
        'Grew advocacy network to 24 clinics.',
        '⁠Reached 183 patients nationally',
        '⁠Partnered with 3 local patient organisations ',
        '⁠Resolved 7 patient complaints through mediation ',
        '⁠Launched prescription discounts programs'
      ]
    },
    {
      year: '2024',
      achievements: [
        'Launched the patient.ng web platform',
        'Grew online community to 540 members',
        'Expanded rewards, loyalty and discounts programs',
        '⁠Advocated in 34 patient rights cases',
        'Rolled out the Patient.ng podcast'
      ]
    },
    {
      year: '2025',
      achievements: [
        'Releasing the iPatient mobile app for both iOS and Android',
        'Developing Patient Advocates Training Program',
        'Lanching the Health Insurance self-paced online course',
        'Expand advocacy network to all 36 states',
        '⁠Grow patient community to 1000 users'
      ]
    }
  ];

  return (
    <section className="bg-[#004146] px-8 py-24">
      <div className="container mx-auto">
        <span className="text-emerald-500">About Us</span>
        
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
        Find patient support that actually works!
        </h2>
        
        <p className="mt-6 max-w-3xl text-lg text-gray-300">
        We are a public-health venture for sustainable patient support systems in Nigeria. Through our campaigns and initiatives, we facilitate a community where members feel supported and empowered to improve their health outcomes.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {timelineData.map((item, index) => (
            <Card key={index} className="border-0 bg-teal-900/50 text-white">
              <CardContent className="p-6">
                <h3 className="mb-6 text-4xl font-bold text-emerald-500">
                  {item.year}
                </h3>
                <ul className="space-y-4">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="mr-2 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;