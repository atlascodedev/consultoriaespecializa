import React from "react"
import styled from "styled-components"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "./slider.css"
import TestimonialCard from "../TestimonialCard"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

interface CardActiveProps {
  active: boolean
}

const CardActiveContainer = styled("div")<CardActiveProps>`
  opacity: ${props => (props.active ? "1" : "0.2")};
  /* scale: ${props => (props.active ? "1" : "0.75")}; */
  transition: all 0.8s ease;
  will-change: scale;
`

type Props = {}

const TestimonialSlider = ({}: Props) => {
  return (
    <div>
      <Swiper
        centeredSlides
        id="swiper-2"
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
        watchOverflow={true}
        spaceBetween={50}
        breakpoints={{
          1024: {
            slidesPerView: "auto",
            pagination: { clickable: true },
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <TestimonialCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <TestimonialCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <TestimonialCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <TestimonialCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <TestimonialCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <TestimonialCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <TestimonialCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialSlider
