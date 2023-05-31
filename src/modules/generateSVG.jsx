// imported modules:
import { randomNum } from "./util";

export default function generateSVG() {
  let svgCollection = [
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      description="planet"
    >
      <path
        d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"
        fill="#2F88FF"
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M37.5641 15.5098V15.5098C41.7833 15.878 44.6787 17.1724 45.2504 19.306C46.3939 23.5737 37.8068 29.5827 26.0705 32.7274C14.3343 35.8721 3.89316 34.9617 2.74963 30.694C2.1505 28.458 4.22245 25.744 8.01894 23.2145V23.2145"
        stroke="#000000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
  ];

  return svgCollection[randomNum(svgCollection.length)];
}
