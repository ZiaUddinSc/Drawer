import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color: string;
  size: number;
}

function EyeClose(props: Props) {
  return (
    <Svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0.186775 0.186441C0.0788084 0.294382 0.0131638 0.437485 0.00177663 0.589729C-0.00961049 0.741973 0.0340161 0.893249 0.124724 1.01605L0.186775 1.08745L3.61571 4.51724C1.94377 5.68908 0.750233 7.42431 0.253925 9.40479C0.215657 9.56782 0.243077 9.73937 0.33026 9.88235C0.417443 10.0253 0.557387 10.1283 0.719846 10.1689C0.882306 10.2096 1.05423 10.1846 1.19847 10.0996C1.34271 10.0145 1.44768 9.87604 1.49069 9.71419C1.93176 7.95637 3.01807 6.42886 4.53372 5.43525L6.07224 6.97376C5.45767 7.61594 5.11903 8.47324 5.12883 9.36205C5.13863 10.2509 5.49611 11.1005 6.12468 11.729C6.75326 12.3574 7.60295 12.7147 8.49176 12.7244C9.38057 12.734 10.2378 12.3952 10.8799 11.7806L15.9111 16.8126C16.0248 16.9267 16.1776 16.9935 16.3385 16.9995C16.4995 17.0056 16.6568 16.9504 16.7788 16.8452C16.9008 16.74 16.9785 16.5926 16.9961 16.4324C17.0138 16.2723 16.9702 16.1114 16.8741 15.9822L16.8121 15.9108L11.616 10.7138L11.6168 10.7121L10.5968 9.69379L8.15731 7.25426H8.15901L5.71098 4.80879L5.71183 4.80709L4.74877 3.84658L1.08778 0.186441C0.968251 0.0670569 0.806219 0 0.637279 0C0.468339 0 0.306307 0.0670569 0.186775 0.186441ZM6.97325 7.87477L9.97803 10.8804C9.57724 11.2675 9.04046 11.4817 8.48328 11.4768C7.92611 11.472 7.39313 11.2485 6.99913 10.8545C6.60513 10.4605 6.38165 9.92754 6.37681 9.37036C6.37196 8.81319 6.58616 8.2764 6.97325 7.87562V7.87477ZM8.49986 2.97447C7.64985 2.97447 6.82534 3.10027 6.04419 3.33572L7.09565 4.38633C8.91428 4.02623 10.8018 4.37875 12.3678 5.37101C13.9339 6.36326 15.0588 7.91937 15.5099 9.71759C15.5539 9.87818 15.659 10.0152 15.8028 10.0993C15.9465 10.1833 16.1174 10.2078 16.279 10.1675C16.4406 10.1272 16.58 10.0253 16.6674 9.88356C16.7547 9.74181 16.7832 9.5715 16.7466 9.40904C16.2857 7.57086 15.2239 5.93935 13.7298 4.77358C12.2357 3.6078 10.395 2.97458 8.49986 2.97447ZM8.66561 5.958L11.8965 9.18804C11.8547 8.34474 11.5009 7.5471 10.9038 6.95015C10.3066 6.3532 9.50892 5.99957 8.66561 5.958Z"
        fill="#002D53"
      />
    </Svg>
  );
}

export default EyeClose;