"use client"

/**
 * Node Modules
 */
import { Swiper, SwiperSlide } from "swiper/react"

/**
 * Components
 */
import RequestCard from './request-card'

/**
 * Styles
 */
import 'swiper/css'
import '../_styles/request-swiper.css'

const RequestList = () => {
  return (
    <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        className="relative z-0"
    >
        <SwiperSlide>
            <RequestCard name="John Smith" id="user-john" score={52} skills={[]} avatar_path="" />
        </SwiperSlide>
        <SwiperSlide>
            <RequestCard name="John Smith" id="user-john" score={52} skills={[]} avatar_path="" />
        </SwiperSlide>
        <SwiperSlide>
            <RequestCard name="John Smith" id="user-john" score={52} skills={[]} avatar_path="" />
        </SwiperSlide>
        <div className="size-full absolute top-0 left-0 right-0 bottom-0 bg-linear-90 from-app-100/0 from-80% to-app-100 z-10 pointer-events-none" />
    </Swiper>
  )
}

export default RequestList