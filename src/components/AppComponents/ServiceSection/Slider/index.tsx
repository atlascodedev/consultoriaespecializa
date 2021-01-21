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
import ServiceCard from "../ServiceCard"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

interface CardActiveProps {
  active: boolean
}

const CardActiveContainer = styled("div")<CardActiveProps>`
  opacity: ${props => (props.active ? "1" : "0.6")};
  scale: ${props => (props.active ? "1" : "0.75")};
  transition: all 0.5s ease;
  will-change: scale;
`

type Props = {}

const ServiceSlider = ({}: Props) => {
  return (
    <div>
      <Swiper
        centeredSlides
        id="swiper-1"
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
              <ServiceCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <ServiceCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <ServiceCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <ServiceCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <ServiceCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <ServiceCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }: any | boolean) => (
            <CardActiveContainer active={isActive}>
              <ServiceCard />
            </CardActiveContainer>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ServiceSlider
