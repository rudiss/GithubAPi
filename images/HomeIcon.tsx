import React from "react";

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
      viewBox="0 0 26 26"
    >
      <g filter="url(#filter0_d)">
        <path
          fill="#162668"
          d="M19.25 11.273v5.762c0 .535-.335.965-.75.965h-3.626c-.206 0-.375-.217-.375-.483v-4.503c0-.265-.168-.483-.375-.483h-2.25c-.206 0-.375.218-.375.483v4.503c0 .266-.169.483-.375.483H7.499c-.416 0-.75-.43-.75-.965v-5.762c0-.145.05-.282.137-.374l5.875-6.225c.138-.144.338-.144.479 0l5.875 6.225a.56.56 0 01.135.374zm2.613-2.449l-2.613-2.77V.484c0-.265-.17-.482-.375-.482h-1.75c-.207 0-.375.217-.375.483v2.919L13.952.44c-.553-.587-1.353-.587-1.906 0l-7.91 8.384c-.16.169-.182.475-.05.68l.797 1.246c.13.205.368.233.528.065l7.35-7.79c.138-.144.338-.144.479 0l7.35 7.79c.16.168.397.14.529-.065l.797-1.246c.13-.21.106-.511-.053-.68z"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="26"
          height="26"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default React.memo(HomeIcon);
