import React from "react"
import styled from "styled-components"
import TestimonialSlider from "./TestimonialSlider"

const TestimonialsRoot = styled("div")`
  background-color: #fbfbfb;
  padding-top: 5vh;
  padding-bottom: 5vh;

  @media (min-width: 1024px) {
    padding-top: 10vh;
    padding-bottom: 10vh;
  }
`

const TestimonialsTitle = styled("div")`
  text-align: center;
  font-size: 30px;
  font-family: "Suez One";
  font-weight: 600;
  /* margin-bottom: 100px; */
`

const TestimonialsSection = () => {
  return (
    <TestimonialsRoot>
      <TestimonialsTitle>Depoimentos</TestimonialsTitle>

      <TestimonialSlider />
    </TestimonialsRoot>
  )
}

export default TestimonialsSection
