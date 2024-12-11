//import React from 'react'
import LeaderboardCard from '../CrowdFunding/LeaderboardCard'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const LeaderboardComponent = () => {

    const trendingCampaigns = [
      {
        id: "1",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "2",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "3",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "4",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "5",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "6",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "7",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "8",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      
]

  return (
    <>
    <div className='mb-20 px-6 border-b-1 border-b-[#7c7c7c]'>
        <h2 className='text-3xl font-bold my-3'>Top Campaign Leaderboard</h2>
        <Swiper
            slidesPerView={4}
            breakpoints={{
                0: {
                    slidesPerView: 1.4,
                },
                400:{
                    slidesPerView:1.4,
                },
                639: {
                    slidesPerView: 2.4,
                },
                865:{
                    slidesPerView:2.5
                },
                
                1080:{
                    slidesPerView:4
                },
                1700:{
                    slidesPerView:4
                }
                }}
            spaceBetween={30}
            //pagination={{clickable: true,}}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            //modules={[Pagination]}
            className="mySwiper"
        >
            {/* <SwiperSlide><div className="h-[300px] bg-[#000] text-[#fff] w-[400px]">slide 1</div></SwiperSlide> */}
            {/* {services.map((service, index) => (
                <SwiperSlide key={index}><FeatureCard 
                    key={index}
                    cardtitle={service.name}
                    cardImage={service.image}
                    cardContent={(service.description).substring(0, 100)}
                    onClick={() => openModal(service)}
                />
                </SwiperSlide>
            ))} */}

        {trendingCampaigns?.map((campaign, index) => (
                <SwiperSlide key={index}><LeaderboardCard
                key={index}
                {...campaign}
                //onLike={() => handleLike(campaign.id, true)}
                />
                </SwiperSlide> 
            ))}
        </Swiper>
        </div>
     
    </>
  )
}

export default LeaderboardComponent