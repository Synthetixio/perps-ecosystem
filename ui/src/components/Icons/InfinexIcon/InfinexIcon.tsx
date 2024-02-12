import { Icon, type IconProps } from '@chakra-ui/icons';

export const InfinexIcon = ({ width = '25px', height = '25px', ...props }: IconProps) => (
  <Icon width={width} height={height} fill="none" {...props}>
    <svg viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Clip path group">
        <mask id="mask0_2848_4600" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="11">
          <g id="clip0_215_3292">
            <path id="Vector" d="M13.3402 0.1875H0.875V10.25H13.3402V0.1875Z" fill="white" />
          </g>
        </mask>
        <g mask="url(#mask0_2848_4600)">
          <g id="Group">
            <path
              id="Vector_2"
              d="M7.98276 8.6913H2.61496V1.86761H3.36967V0.1875H0.875V10.25H9.60149V3.18386H7.98276V8.6913Z"
              fill="#FF9B69"
            />
            <path
              id="Vector_3"
              d="M6.13077 1.7462L11.4986 1.7462L11.4986 8.56989L10.7439 8.56989L10.7439 10.25L13.2385 10.25L13.2385 0.1875L4.51204 0.187499L4.51204 7.25364L6.13077 7.25364L6.13077 1.7462Z"
              fill="#FF9B69"
            />
          </g>
        </g>
      </g>
    </svg>
  </Icon>
);
