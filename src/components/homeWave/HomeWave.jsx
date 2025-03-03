import React from 'react';
import "./HomeWave.scss";

const HomeWave = () => {
  return (
    <>
      <svg 
        id="wave-pattern" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        style={{ position: 'absolute', zIndex: -10 }}
      >
        <defs>
          <pattern 
            className="pattern wave-color" 
            id="bg-wave" 
            patternUnits="userSpaceOnUse" 
            width="1000" 
            height="400"
          >
            <path 
              d="M1484.98 0.0853853C1402.51 2.28495 1322.66 46.58 1242.81 90.875C1160.9 136.313 1078.98 181.75 994.246 181.75C909.509 181.75 827.597 136.313 745.685 90.875C663.772 45.4375 581.86 0 497.123 0C412.387 0 330.474 45.4375 248.562 90.875C166.65 136.313 84.7374 181.75 0.000428317 181.75L0 399.765C82.4694 397.566 162.322 353.271 242.175 308.976C324.087 263.538 405.999 218.101 490.736 218.101C575.473 218.101 657.385 263.538 739.298 308.976C821.21 354.413 903.122 399.851 987.859 399.851C1072.6 399.851 1154.51 354.413 1236.42 308.976C1318.33 263.538 1400.25 218.101 1484.98 218.101L1484.98 0.0853853Z" 
              fillOpacity="0.05"
            />
          </pattern>
          <pattern 
            className="pattern wave-color2" 
            id="bg-wave2" 
            patternUnits="userSpaceOnUse" 
            width="1000" 
            height="400"
          >
            <path 
              d="M1484.98 0.0853853C1402.51 2.28495 1322.66 46.58 1242.81 90.875C1160.9 136.313 1078.98 181.75 994.246 181.75C909.509 181.75 827.597 136.313 745.685 90.875C663.772 45.4375 581.86 0 497.123 0C412.387 0 330.474 45.4375 248.562 90.875C166.65 136.313 84.7374 181.75 0.000428317 181.75L0 399.765C82.4694 397.566 162.322 353.271 242.175 308.976C324.087 263.538 405.999 218.101 490.736 218.101C575.473 218.101 657.385 263.538 739.298 308.976C821.21 354.413 903.122 399.851 987.859 399.851C1072.6 399.851 1154.51 354.413 1236.42 308.976C1318.33 263.538 1400.25 218.101 1484.98 218.101L1484.98 0.0853853Z" 
              fillOpacity="0.03"
            />
          </pattern>
        </defs>
      </svg>
      
      <div className="main-waves">
        <svg className="common-wave wave-1" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="400" fill="url(#bg-wave)" />
        </svg>
        <svg className="common-wave wave-2" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="400" fill="url(#bg-wave2)" />
        </svg>
        <svg className="common-wave wave-3" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="400" fill="url(#bg-wave)" />
        </svg>
      </div>
    </>
  );
};

export default HomeWave;