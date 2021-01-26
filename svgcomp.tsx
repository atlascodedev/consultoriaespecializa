import React from "react"
import styled from "styled-components"

const SVGContainer = styled("div")`
  padding-top: 10vh;
  overflow: visible;
  width: 500px;
  height: 500px;

  & > svg {
    overflow: visible;
    width: auto;
  }
`

function svgcomp() {
  return (
    <div>
      <SVGContainer>
        <svg
          // width={`${imageSize.width}`}
          // height={`${imageSize.height}`}
          height="100%"
          width="100%"
          viewBox="0 0 639 585"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="imgpattern" x="6%" y="0" width="100%" height="100%">
              <image
                // preserveAspectRatio="none"
                style={{
                  height: "min-content",
                  width: "100%",
                  overflow: "visible",
                }}
                href="https://i.imgur.com/jkjzBCs.png"
              />
            </pattern>
          </defs>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M316.607 33.853C383.553 24.5826 459.827 -24.9633 513.591 15.99C567.601 57.1313 528.229 146.968 549.674 211.387C571.384 276.599 643.272 323.188 638.689 391.766C633.79 465.068 592.363 544.272 525.407 574.503C459.351 604.328 385.848 558.598 316.607 537.187C268.06 522.175 230.352 490.787 184.416 469.06C123.215 440.112 24.4619 453.224 3.19884 388.948C-18.0256 324.788 72.2453 278.208 101.06 217.08C124.523 167.302 113.708 101.2 155.636 65.5583C198.349 29.25 261.077 41.5426 316.607 33.853Z"
            fill="url(#imgpattern)"
          />
        </svg>
      </SVGContainer>
    </div>
  )
}

export default svgcomp
