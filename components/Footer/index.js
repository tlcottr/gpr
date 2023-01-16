import React from "react";

const Symbol = () => {
  return (
    <svg
      width="8"
      height="11"
      viewBox="0 0 17 22"
      fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
      className="inline w-auto px-2"
    >
      <path
        d="M4.0714 9.23772C4.33361 11.3921 7.83098 11.4878 9.71254 11.8421C12.5579 12.3559 16.3565 13.5111 16.3777 17.5754C16.3777 19.7653 14.8399 22.2705 11.3815 21.9764C6.32502 21.5653 4.31235 16.1758 4.31235 16.1545H3.92966C3.53989 18.3089 3.66036 21.8984 3.66036 21.8984H0.0212606C0.279931 17.3415 2.39181 15.2367 4.20251 15.2367C5.66949 15.2367 7.10812 16.1651 8.05422 16.9518C9.07827 17.8093 10.035 18.4577 11.6224 18.518C13.745 18.5888 14.1737 16.6541 13.2595 15.7045C12.526 14.9533 10.7579 14.6698 8.82668 14.5989C2.62214 14.3651 0.924835 12.487 1.20477 9.85428C1.27563 9.12788 1.77171 6.65456 5.42499 4.80489C5.58651 4.70685 5.76915 4.6489 5.95765 4.63589C6.14614 4.62289 6.33502 4.6552 6.50847 4.73013C6.68192 4.80506 6.83491 4.92043 6.95465 5.0666C7.07438 5.21276 7.15738 5.38546 7.19671 5.57027C7.69987 7.21797 9.63813 8.27391 11.4098 7.89122C11.9218 7.76579 12.3746 7.46729 12.6917 7.04626C13.0087 6.62523 13.1705 6.10755 13.1497 5.5809C13.1497 4.30881 12.0229 3.24578 10.446 3.24578H0V0H10.1555C14.0143 0 16.3458 2.20047 16.3458 5.55964C16.3213 6.64148 15.9633 7.68936 15.3208 8.56013C14.6784 9.4309 13.7828 10.0821 12.7563 10.4248C10.2759 11.2894 5.75099 9.77278 6.11242 5.59153H5.70138C5.70138 5.59153 3.86234 7.49081 4.0714 9.23772Z"
        fill="white"
      />
    </svg>
  );
};

const Footer = () => {
  return (
    <div className="text-white text-sm fixed bottom-0 p-7 flex flex-row items-end justify-between w-full">
      <div className="font-mono lowercase flex-col">
        <span>greenpoint runners</span>
        <br></br>
        <span className="opacity-50">community runs saturday, 9am</span>
      </div>
      <div className="font-mono lowercase text-right text-[#3C8323]">
        <a href="https://www.instagram.com/greenpointrunners/" noReferrer>
          @greenpointrunners
        </a>
        <br></br>
        <div className="text-white flex flex-row items-center">
          <p className="opacity-50 text-right">powered by</p>
          <Symbol />
        </div>
      </div>
    </div>
  );
};

export default Footer;
