import React from 'react';
import ContentLoader from "react-content-loader"

import pizza from './pizza.css'

const PizzaBlockLoader = () => {
   return (
      <ContentLoader
         className='pizza-block'
         speed={2}
         width={280}
         height={465}
         viewBox="0 0 280 465"
         backgroundColor="#dedede"
         foregroundColor="#c7c7c7"
      >
         <circle cx="138" cy="123" r="123" />
         <rect x="0" y="275" rx="6" ry="4" width="280" height="28" />
         <rect x="0" y="326" rx="6" ry="6" width="280" height="81" />
         <rect x="147" y="423" rx="22" ry="22" width="132" height="41" />
         <rect x="0" y="429" rx="4" ry="4" width="89" height="27" />
      </ContentLoader>
   )
};

export default PizzaBlockLoader;