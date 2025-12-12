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
import { getAllSwaps } from "@/app/_datas/swaps/get-all-swaps"

const RequestList = ({ swaps }) => {
    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={8}
            className="relative flex z-0"
        >
            {
                swaps.map((swap) => <SwiperSlide>
                    <RequestCard 
                        name={swap.requester.name} 
                        id={swap.id} 
                        score={0} 
                        skill={swap.requester_skill.name} 
                        avatar_path={swap.requester.avatar_path} 
                        description={swap.requester_skill.description} 
                    />
                </SwiperSlide>)
            }
        </Swiper>
    )
}

export default RequestList