import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color: string;
  size: number;
}

function Eye(props: Props) {
  return (
    <Svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.50003 7.12895C10.3399 7.12895 11.1453 7.46258 11.7392 8.05644C12.3331 8.65031 12.6667 9.45576 12.6667 10.2956C12.6667 11.1355 12.3331 11.9409 11.7392 12.5348C11.1453 13.1287 10.3399 13.4623 9.50003 13.4623C8.66017 13.4623 7.85472 13.1287 7.26085 12.5348C6.66699 11.9409 6.33336 11.1355 6.33336 10.2956C6.33336 9.45576 6.66699 8.65031 7.26085 8.05644C7.85472 7.46258 8.66017 7.12895 9.50003 7.12895V7.12895ZM9.50003 8.31645C8.97512 8.31645 8.47171 8.52497 8.10054 8.89613C7.72938 9.2673 7.52086 9.77071 7.52086 10.2956C7.52086 10.8205 7.72938 11.3239 8.10054 11.6951C8.47171 12.0663 8.97512 12.2748 9.50003 12.2748C10.0249 12.2748 10.5283 12.0663 10.8995 11.6951C11.2707 11.3239 11.4792 10.8205 11.4792 10.2956C11.4792 9.77071 11.2707 9.2673 10.8995 8.89613C10.5283 8.52497 10.0249 8.31645 9.50003 8.31645V8.31645ZM9.50003 4.35416C13.152 4.35416 16.3052 6.84791 17.18 10.3423C17.2183 10.4951 17.1944 10.6568 17.1135 10.7919C17.0325 10.927 16.9013 11.0244 16.7485 11.0627C16.5958 11.1011 16.4341 11.0771 16.299 10.9962C16.1639 10.9153 16.0664 10.784 16.0281 10.6313C15.6616 9.17736 14.8202 7.88741 13.6373 6.96597C12.4544 6.04453 10.9978 5.54433 9.4984 5.54469C7.99898 5.54506 6.54261 6.04596 5.36019 6.96798C4.17777 7.88999 3.33698 9.18035 2.97115 10.6344C2.95228 10.7101 2.91869 10.7814 2.87229 10.8441C2.8259 10.9068 2.7676 10.9597 2.70074 10.9999C2.63388 11.0401 2.55977 11.0667 2.48262 11.0782C2.40548 11.0897 2.32681 11.086 2.25113 11.0671C2.17544 11.0482 2.10422 11.0146 2.04151 10.9682C1.97881 10.9218 1.92586 10.8635 1.88569 10.7967C1.84551 10.7298 1.8189 10.6557 1.80737 10.5786C1.79584 10.5014 1.79961 10.4228 1.81848 10.3471C2.24782 8.63493 3.23687 7.11531 4.62859 6.02953C6.0203 4.94376 7.73487 4.35409 9.50003 4.35416V4.35416Z"
        fill="#002D53"
      />
    </Svg>
  );
}

export default Eye;
