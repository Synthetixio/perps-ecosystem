import { Icon, type IconProps } from '@chakra-ui/icons';

export const KwentaIcon = ({ width = '25px', height = '25px', ...props }: IconProps) => (
  <Icon width={width} height={height} fill="none" {...props}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0275 2.80005L30 11.2857V19.7715L16.0275 11.2857V2.80005Z"
        fill="url(#paint0_linear_931_22459)"
      />
      <path
        d="M16.0275 29.2001L30 20.8002V12.4001L16.0275 20.8002V29.2001Z"
        fill="url(#paint1_linear_931_22459)"
      />
      <path
        d="M16.0275 2.80005L2.4 11.2857V19.7715L16.0275 11.2857V2.80005Z"
        fill="url(#paint2_linear_931_22459)"
      />
      <path
        d="M16.0275 29.2001L2.4 20.8002V12.4001L16.0275 20.8002V29.2001Z"
        fill="url(#paint3_linear_931_22459)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_931_22459"
          x1="41.9148"
          y1="11.2384"
          x2="7.45932"
          y2="11.2384"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#996939" />
          <stop offset="1" stopColor="#D0A875" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_931_22459"
          x1="23.0138"
          y1="29.2001"
          x2="26.409"
          y2="-2.93423"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#272728" />
          <stop offset="1" stopColor="#4B4B4B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_931_22459"
          x1="16.1116"
          y1="6.27919"
          x2="2.39296"
          y2="17.0245"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#996939" />
          <stop offset="1" stopColor="#D0A875" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_931_22459"
          x1="9.21374"
          y1="29.2001"
          x2="9.21374"
          y2="12.4001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#363636" />
          <stop offset="1" stopColor="#333232" />
        </linearGradient>
      </defs>
    </svg>
  </Icon>
);
